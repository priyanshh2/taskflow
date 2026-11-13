# TaskFlow - Task Management Application

TaskFlow is a simple, modern task management application built for the Graduate Support Engineer Trainee assessment. 

The project uses a modern serverless architecture powered by **React**, **Vite**, **Tailwind CSS**, and **Firebase (Authentication & Cloud Firestore)**.

---

## 🛠️ Technology Stack

- **Frontend:**
  - React 19 (JavaScript)
  - Vite 6
  - Tailwind CSS v4
- **Backend & Cloud Services:**
  - **Firebase Authentication:** Google Sign-In with popup & browser persistence.
  - **Cloud Firestore:** Real-time NoSQL document database for task management.

---

## 📁 Project Structure

```text
taskflow/
├── package.json               # Root scripts to run, build, and preview the client
├── .gitignore                 # Ignores node_modules, .env, .env.local, dist, and cache files
├── firestore.rules            # Firestore security rules enforcing user data isolation
├── README.md                  # Project documentation and setup guide
└── client/                    # React frontend application
    ├── .env.example           # Firebase environment variables template
    ├── .env.local             # Local environment variables with live credentials (gitignored)
    ├── index.html             # Application HTML entry point
    ├── package.json           # Client dependencies (React, Firebase SDK, Tailwind CSS)
    ├── vite.config.js         # Vite configuration with React and Tailwind CSS
    └── src/
        ├── App.jsx            # Root component with AuthProvider and protected route switching
        ├── index.css          # Global CSS importing Tailwind CSS v4
        ├── main.jsx           # React DOM render entry point
        ├── components/
        │   ├── Dashboard.jsx  # Authenticated dashboard with user profile, TaskForm & TaskList
        │   ├── LoadingSpinner.jsx # Loading indicator during auth state detection
        │   ├── Login.jsx      # TaskFlow login screen with "Continue with Google"
        │   ├── TaskForm.jsx   # Form to create new tasks (Title & Description)
        │   ├── TaskItem.jsx   # Individual task card with status badge & status dropdown
        │   └── TaskList.jsx   # List of tasks with filters, loading state & empty state
        ├── context/
        │   └── AuthContext.jsx # Reusable AuthContext (user, loginWithGoogle, logout)
        ├── firebase/
        │   └── firebase.js    # Firebase SDK initialization, Auth & Firestore exports
        ├── services/
        │   └── taskService.js # Firestore CRUD operations (createTask, getUserTasks, updateTaskStatus)
        └── utils/
            └── errorUtils.js  # Friendly Firebase authentication error code mapping
```

---

## 📊 Firestore Data Model (`tasks` Collection)

Each task document stored in Cloud Firestore follows this structure:

| Field | Type | Description |
| :--- | :--- | :--- |
| `title` | `string` | Task title (non-empty, trimmed, up to 200 chars) |
| `description`| `string` | Optional task description (trimmed, up to 1000 chars) |
| `status` | `string` | Current task status: `'Planned'` \| `'In Progress'` \| `'Complete'` |
| `ownerUid` | `string` | Authenticated user's Firebase UID (`request.auth.uid`) |
| `createdAt` | `timestamp` | Firestore server timestamp set at creation |
| `updatedAt` | `timestamp` | Firestore server timestamp set at creation and updated on status change |

---

## 🔒 Firestore Security Rules

The security rules are defined in [firestore.rules](file:///c:/Users/Priyanshu/OneDrive/Desktop/taskflow/firestore.rules). They enforce:
1. **Strict User Isolation:** Users can read and update **only** documents where `ownerUid == request.auth.uid`.
2. **Creation Validation:** New documents require `ownerUid == request.auth.uid`, non-empty title, and initial status `'Planned'`.
3. **Immutability of Ownership:** The `ownerUid` and `createdAt` cannot be altered upon update.
4. **Status Validation:** Updates to `status` must be one of `'Planned'`, `'In Progress'`, or `'Complete'`.
5. **Deletion Disabled:** Task deletion is disallowed.

### How to Publish Security Rules in Firebase Console:
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Select your project (**Taskflow**).
3. In the left navigation, click **Build** > **Firestore Database**.
4. Click on the **Rules** tab at the top.
5. Replace the editor contents with the code from `firestore.rules`.
6. Click **Publish**.

---

## ⚙️ Environment Configuration

`client/.env.local` contains your active Firebase configuration:

```env
VITE_FIREBASE_API_KEY=AIzaSy...
VITE_FIREBASE_AUTH_DOMAIN=taskflow-b51e6.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=taskflow-b51e6
VITE_FIREBASE_STORAGE_BUCKET=taskflow-b51e6.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=118118093514
VITE_FIREBASE_APP_ID=1:118118093514:web:3f39dcd24e59a2c3f01a33
```

---

## 🚀 How to Run

### Development Mode
From the project root:
```bash
npm run dev
```

Open **[http://localhost:5173](http://localhost:5173)** in your browser.

### Production Build
From the project root:
```bash
npm run build
```

---

## 🧪 Testing Multi-User Data Isolation

To test that a second user cannot see the first user's tasks:
1. Open the application at `http://localhost:5173` in a normal browser window.
2. Sign in with **Google Account A** and create 2-3 tasks.
3. Open a **Private/Incognito** browser window (or a different browser profile).
4. Navigate to `http://localhost:5173` and sign in with **Google Account B**.
5. Notice that Account B's task list is completely empty and displays the empty state.
6. Create a task with Account B.
7. Return to Account A's window and refresh: Account A will see only Account A's tasks, and will never see Account B's tasks.

---

## 🔄 Roadmap

- [x] **Phase 1:** Project Setup & Foundation.
- [x] **Phase 1.5:** Stack migration to React + Firebase.
- [x] **Phase 2:** Firebase SDK initialization, AuthContext, Google Authentication, and Protected Dashboard.
- [x] **Phase 3:** Cloud Firestore database integration, Task CRUD operations, and Security Rules.
- [x] **Phase 4:** Final Quality Assurance, UI Responsiveness Polish, and Code Cleanliness.
