import {
  collection,
  addDoc,
  doc,
  updateDoc,
  getDocs,
  query,
  where,
  orderBy,
  serverTimestamp
} from 'firebase/firestore';
import { db } from '../firebase/firebase.js';

export const TASK_STATUSES = {
  PLANNED: 'Planned',
  IN_PROGRESS: 'In Progress',
  COMPLETE: 'Complete',
};

export const VALID_STATUSES = Object.values(TASK_STATUSES);

/**
 * Creates a new task for the authenticated user
 * @param {Object} taskData - { title, description }
 * @param {string} ownerUid - Authenticated user's UID
 * @returns {Promise<Object>} Created task with document ID
 */
export const createTask = async ({ title, description }, ownerUid) => {
  if (!db) {
    throw new Error('Database is not initialized. Please verify your Firebase configuration.');
  }

  if (!ownerUid) {
    throw new Error('User authentication is required to create a task.');
  }

  const trimmedTitle = typeof title === 'string' ? title.trim() : '';
  if (!trimmedTitle) {
    throw new Error('Task title is required and cannot be empty.');
  }

  const trimmedDescription = typeof description === 'string' ? description.trim() : '';

  const newTask = {
    title: trimmedTitle,
    description: trimmedDescription,
    status: TASK_STATUSES.PLANNED,
    ownerUid,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  try {
    const docRef = await addDoc(collection(db, 'tasks'), newTask);
    return {
      id: docRef.id,
      ...newTask,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  } catch (error) {
    console.error('[taskService] Error creating task:', error);
    if (error.code === 'permission-denied') {
      throw new Error('Permission denied: You do not have permission to create this task. Check Firestore security rules.');
    }
    throw new Error(error.message || 'Failed to create task.');
  }
};

/**
 * Retrieves all tasks belonging to the authenticated user, newest first
 * @param {string} ownerUid - Authenticated user's UID
 * @returns {Promise<Array>} List of tasks
 */
export const getUserTasks = async (ownerUid) => {
  if (!db) {
    throw new Error('Database is not initialized. Please verify your Firebase configuration.');
  }

  if (!ownerUid) {
    throw new Error('User authentication is required to retrieve tasks.');
  }

  const tasksRef = collection(db, 'tasks');

  // Helper to extract and sort tasks descending by creation time
  const parseAndSortTasks = (snapshot) => {
    const tasks = [];
    snapshot.forEach((docSnap) => {
      tasks.push({
        id: docSnap.id,
        ...docSnap.data(),
      });
    });

    return tasks.sort((a, b) => {
      const getMillis = (val) => {
        if (!val) return 0;
        if (typeof val.toMillis === 'function') return val.toMillis();
        if (typeof val.seconds === 'number') return val.seconds * 1000;
        if (val instanceof Date) return val.getTime();
        return new Date(val).getTime() || 0;
      };
      return getMillis(b.createdAt) - getMillis(a.createdAt);
    });
  };

  try {
    // Attempt query with Firestore orderBy
    const q = query(
      tasksRef,
      where('ownerUid', '==', ownerUid),
      orderBy('createdAt', 'desc')
    );
    const snapshot = await getDocs(q);
    return parseAndSortTasks(snapshot);
  } catch (err) {
    // If a composite index is missing or building, fallback gracefully to equality query + client-side sort
    if (err.code === 'failed-precondition' || err.message?.includes('requires an index')) {
      console.warn('[taskService] Falling back to client-side sorting while Firestore index is building:', err.message);
      const fallbackQuery = query(tasksRef, where('ownerUid', '==', ownerUid));
      const snapshot = await getDocs(fallbackQuery);
      return parseAndSortTasks(snapshot);
    }

    console.error('[taskService] Error fetching user tasks:', err);
    if (err.code === 'permission-denied') {
      throw new Error('Permission denied: Unable to read tasks. Ensure your Firestore security rules are deployed.');
    }
    throw new Error(err.message || 'Failed to retrieve tasks.');
  }
};

/**
 * Updates a task's status
 * @param {string} taskId - Firestore document ID
 * @param {string} newStatus - 'Planned' | 'In Progress' | 'Complete'
 * @param {string} ownerUid - Authenticated user's UID (for validation)
 * @returns {Promise<void>}
 */
export const updateTaskStatus = async (taskId, newStatus, ownerUid) => {
  if (!db) {
    throw new Error('Database is not initialized. Please verify your Firebase configuration.');
  }

  if (!taskId) {
    throw new Error('Task ID is required to update status.');
  }

  if (!VALID_STATUSES.includes(newStatus)) {
    throw new Error(`Invalid status "${newStatus}". Must be one of: ${VALID_STATUSES.join(', ')}`);
  }

  try {
    const taskDocRef = doc(db, 'tasks', taskId);
    await updateDoc(taskDocRef, {
      status: newStatus,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    console.error('[taskService] Error updating task status:', error);
    if (error.code === 'permission-denied') {
      throw new Error('Permission denied: You cannot update this task or set an invalid status.');
    }
    throw new Error(error.message || 'Failed to update task status.');
  }
};
