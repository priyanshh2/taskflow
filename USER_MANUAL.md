# TaskFlow — User Manual

**Application Name:** TaskFlow  
**Live Web Application:** [https://taskflow-b51e6.web.app](https://taskflow-b51e6.web.app)  
**Target Audience:** First-time users  
**Document Version:** 2.0.0 (Elevated Quality Release)  

---

## Quick Navigation

- [1. About TaskFlow](#1-about-taskflow)
- [2. System Requirements](#2-system-requirements)
- [3. Accessing the Application](#3-accessing-the-application)
- [4. Signing In with Google](#4-signing-in-with-google)
- [5. Understanding the Dashboard](#5-understanding-the-dashboard)
- [6. Creating a New Task](#6-creating-a-new-task)
- [7. Viewing & Filtering Tasks](#7-viewing--filtering-tasks)
- [8. Updating Task Status](#8-updating-task-status)
- [9. Signing Out](#9-signing-out)
- [10. Troubleshooting Guide](#10-troubleshooting-guide)
- [11. Frequently Asked Questions (FAQ)](#11-frequently-asked-questions-faq)

---

## 1. About TaskFlow

TaskFlow is a simple personal task management web application. It helps you keep track of your daily tasks, organize your work, and monitor what is planned, in progress, or completed.

### Key Benefits
- **No Passwords to Remember:** Sign in securely using your existing Google account.
- **Strict Privacy:** Your tasks are tied to your personal Google ID; no other user can see them.
- **Automatic Cloud Saving:** All tasks and status changes save immediately to the cloud.
- **Works Everywhere:** Accessible on desktop, tablet, and mobile browsers.

---

## 2. System Requirements

- **Supported Web Browsers:** Google Chrome, Microsoft Edge, Mozilla Firefox, or Apple Safari (latest versions).
- **Internet Connection:** Required to save and retrieve tasks from Google Cloud.
- **Account:** Any active Google email address (`@gmail.com` or custom Google Workspace account).
- **Pop-up Setting:** Ensure your browser allows pop-ups for `taskflow-b51e6.web.app` so the Google sign-in window can open.

---

## 3. Accessing the Application

### 🎯 What You Want to Do
Open the TaskFlow web application on your device.

### 📋 Step-by-Step Instructions
1. Open your web browser.
2. In the address bar, type or paste:  
   **`https://taskflow-b51e6.web.app`**
3. Press **Enter**.

### 📷 Application Screen
![TaskFlow Sign-In Page](docs/screenshots/01-landing-login-page.png)  
*Figure 1: TaskFlow landing screen showing branding and the Google sign-in button.*  
**Screenshot file:** `docs/screenshots/01-landing-login-page.png`

### ✅ Expected Result
The **Sign in to TaskFlow** card loads with a white "Continue with Google" button.

---

## 4. Signing In with Google

### 🎯 What You Want to Do
Sign into your personal TaskFlow workspace without entering a password.

### 📋 Step-by-Step Instructions
1. Click the **"Continue with Google"** button.
2. A Google account chooser pop-up window will appear.
3. Click on your Google account. (If you are not already logged in to Google, enter your Google email and password).
4. Review the basic profile permission (Name, Email, Profile picture) and confirm.

### 📷 Application Screen
![Google Sign-In Pop-up Dialog](docs/screenshots/02-google-sign-in-popup.png)  
*Figure 2: Official Google OAuth popup dialog prompting account selection.*  
**Screenshot file:** `docs/screenshots/02-google-sign-in-popup.png`

### ✅ Expected Result
The pop-up window closes automatically, and the application redirects you to your personal TaskFlow Dashboard.

---

## 5. Understanding the Dashboard

### 🎯 What You Want to Do
Familiarize yourself with the layout of your workspace.

### 📋 Overview of Layout

```
+-----------------------------------------------------------------------------------+
| [TF] TaskFlow                                  [Avatar] John Doe     [Sign out]   |
+-----------------------------------------------------------------------------------+
| [Avatar] Welcome, John Doe! (john@gmail.com)          [Active Google Session]     |
+-------------------------------------+---------------------------------------------+
| CREATE NEW TASK                     | YOUR TASKS (Total: 2)             [Refresh] |
|                                     | [All (2)] [Planned (1)] [In Progress (1)]   |
| Task Title *                        |                                             |
| [ e.g. Review client report       ] | +-----------------------------------------+ |
|                                     | | Review client report          [Planned] | |
| Description (optional)              | | Status: [Planned v]                     | |
| [ Context or notes...             ] | +-----------------------------------------+ |
|                                     |                                             |
| [ Create Task ]                     |                                             |
+-------------------------------------+---------------------------------------------+
```

1. **Top Bar:** Shows the TaskFlow logo, your profile name, your Google profile photo, and the "Sign out" button.
2. **Welcome Card:** Confirms your active Google identity and email.
3. **Left Panel ("Create New Task"):** The form where you add new items.
4. **Right Panel ("Your Tasks"):** The list of your personal tasks with category filters and counter badges.

### 📷 Application Screen
![TaskFlow Dashboard Overview](docs/screenshots/03-dashboard-overview.png)  
*Figure 3: Full TaskFlow Dashboard view showing user profile, creation form, and task list.*  
**Screenshot file:** `docs/screenshots/03-dashboard-overview.png`

### ✅ Expected Result
You see your name and email displayed at the top, an empty task list (if first time), and an active task creation form.

---

## 6. Creating a New Task

### 🎯 What You Want to Do
Add a new task to your personal list.

### 📋 Step-by-Step Instructions
1. In the **"Create New Task"** form on the left, click in the **Task Title** input field.
2. Type a clear title for your task (e.g., *"Prepare weekly project status update"*).  
   *Note: Title is required and cannot be empty or spaces only.*
3. *(Optional)* Click in the **Description** field and enter extra details or instructions.
4. Click the purple **"Create Task"** button.

### 📷 Application Screen
![Filling in the Task Form](docs/screenshots/04-task-creation-form.png)  
*Figure 4: Entering title and description into the Create New Task form.*  
**Screenshot file:** `docs/screenshots/04-task-creation-form.png`

![Task Created Success Banner](docs/screenshots/05-task-created-success.png)  
*Figure 5: Green confirmation banner confirming task creation in Cloud Firestore.*  
**Screenshot file:** `docs/screenshots/05-task-created-success.png`

### ✅ Expected Result
- A green banner announces: *"Task successfully created and saved to Cloud Firestore."*
- The input fields reset.
- The new task appears at the top of your task list with the initial status set to **Planned**.

---

## 7. Viewing & Filtering Tasks

### 🎯 What You Want to Do
Review your tasks and filter them based on their current progress.

### 📋 Step-by-Step Instructions
1. Review the **"Your Tasks"** panel on the right. Tasks are listed with the newest items on top.
2. Click any of the filter pills at the top of the list to narrow your view:
   - **All:** Displays every task you have created.
   - **Planned:** Displays tasks that are scheduled but not started.
   - **In Progress:** Displays tasks you are actively working on.
   - **Complete:** Displays finished tasks.
3. To pull the latest updates if you have another window open, click the **"Refresh"** button.

### 📷 Application Screen
![Task List with Filters](docs/screenshots/06-task-list-and-filters.png)  
*Figure 6: Task list displaying tasks, creation timestamps, and active status filter tabs.*  
**Screenshot file:** `docs/screenshots/06-task-list-and-filters.png`

### ✅ Expected Result
The task list immediately adjusts to show only the tasks that match the selected filter.

---

## 8. Updating Task Status

### 🎯 What You Want to Do
Move a task forward as you work on it (e.g. from Planned to In Progress, or to Complete).

### 📋 Step-by-Step Instructions
1. Find the task card you want to update.
2. On the right side of the card, click the **Status** dropdown menu.
3. Choose the new status:
   - **Planned** (Sky Blue badge)
   - **In Progress** (Amber/Yellow badge)
   - **Complete** (Green badge)

### 📷 Application Screen
![Status Dropdown Selection](docs/screenshots/07-status-change-dropdown.png)  
*Figure 7: Selecting a new lifecycle status from the task dropdown.*  
**Screenshot file:** `docs/screenshots/07-status-change-dropdown.png`

### ✅ Expected Result
- The status badge changes color and label immediately.
- A brief notification banner confirms: *"Task status updated to [New Status]."*
- The change is saved permanently to the cloud.

> [!NOTE]  
> **Editing and Deletion:** TaskFlow currently supports updating the status of tasks. Editing task titles or deleting tasks is intentionally not supported to preserve task history.

---

## 9. Signing Out

### 🎯 What You Want to Do
Safely end your session when you are finished using TaskFlow.

### 📋 Step-by-Step Instructions
1. Navigate to the top-right corner of the dashboard header.
2. Click the **"Sign out"** button next to your name and avatar.

### 📷 Application Screen
![Signing Out of TaskFlow](docs/screenshots/08-sign-out.png)  
*Figure 8: Sign out button in the top navigation bar.*  
**Screenshot file:** `docs/screenshots/08-sign-out.png`

### ✅ Expected Result
Your session is terminated, and the browser returns to the TaskFlow sign-in screen.

---

## 10. Troubleshooting Guide

The table below outlines common issues and verified solutions:

| Issue | Likely Cause | Verified Solution |
| :--- | :--- | :--- |
| **"Pop-up blocked" message appears** | Browser blocked the Google sign-in window. | Look at the right side of your browser address bar. Click the pop-up icon, select **"Always allow pop-ups from https://taskflow-b51e6.web.app"**, click **Done**, and click **"Continue with Google"** again. |
| **"Sign-in cancelled" alert appears** | Google login pop-up was closed before completing login. | Click the **&times;** button to dismiss the alert, click **"Continue with Google"**, and keep the pop-up open until your account is chosen. |
| **"Create Task" button is disabled** | The Task Title field is empty or contains only spaces. | Type at least one letter or word into the **Task Title** field. The button will activate immediately. |
| **"Permission denied" alert appears** | Browser session expired or Firestore rules not published. | Click **"Sign out"** and sign back in. If you are an administrator, verify rules are published in Firebase Console under **Firestore &gt; Rules**. |
| **Changes made in another tab do not show** | The application does not poll continuously to conserve data. | Click the **"Refresh"** button at the top of the "Your Tasks" card to pull the latest state from the cloud. |
| **Blank white screen on load** | Network connectivity issue or stale browser cache. | Perform a hard refresh: Press `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac). Ensure internet connection is active. |

---

## 11. Frequently Asked Questions (FAQ)

### Q: Can anyone else see my tasks?
**No.** Every task is stamped with your unique Google User ID. Cloud Firestore security rules strictly prevent any other user from viewing, querying, or updating your tasks.

### Q: Can I delete a task?
**No.** Task deletion is disabled by security rules. When you finish a task, select **Complete** in the status dropdown.

### Q: Can I edit the title or description of a task after creating it?
**No.** Titles and descriptions are permanent once submitted. You can change the status at any time.

### Q: Will my tasks be saved if I close my browser or restart my computer?
**Yes.** All tasks are stored securely in Google Cloud. When you log in again from any computer or mobile phone, your tasks will be there.

---

*TaskFlow User Manual &bull; Simple, Secure Task Management &bull; [taskflow-b51e6.web.app](https://taskflow-b51e6.web.app)*
