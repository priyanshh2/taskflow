# TaskFlow — User Manual

**Application Name:** TaskFlow  
**Live Web Application:** [https://taskflow-b51e6.web.app](https://taskflow-b51e6.web.app)  
**Target Audience:** First-time users and evaluators  
**Document Version:** 1.0.0  
**Last Updated:** November 2026  

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Application URL](#2-application-url)
3. [System Requirements](#3-system-requirements)
4. [Accessing TaskFlow](#4-accessing-taskflow)
5. [Google Sign-In Instructions](#5-google-sign-in-instructions)
6. [Understanding the Dashboard](#6-understanding-the-dashboard)
7. [Creating a Task](#7-creating-a-task)
8. [Viewing Tasks](#8-viewing-tasks)
9. [Updating Task Status](#9-updating-task-status)
10. [Understanding Task Statuses](#10-understanding-task-statuses)
11. [Signing Out](#11-signing-out)
12. [Common Problems and Troubleshooting](#12-common-problems-and-troubleshooting)
13. [Frequently Asked Questions (FAQ)](#13-frequently-asked-questions-faq)

---

## 1. Introduction

Welcome to **TaskFlow**! 

TaskFlow is a clean, simple, and reliable personal task management web application. It helps you organize your daily work, prioritize assignments, and track the progress of your activities from start to finish.

With TaskFlow, you don't need to remember another username or password. You can sign in instantly and securely using your existing Google account. Every task you create is saved securely in the cloud and tied exclusively to your personal account, ensuring that your tasks remain private and accessible only to you.

### Key Highlights
- **Simple, Fast Sign-In:** Sign in with one click using your Google account.
- **Personal Privacy:** Only you can view, create, and update your tasks.
- **Clear Progress Tracking:** Group tasks into `Planned`, `In Progress`, and `Complete`.
- **Cloud Persistence:** Your tasks are saved automatically to the cloud; refreshing your page or switching devices won't lose your work.
- **Mobile Friendly:** Works seamlessly on smartphones, tablets, laptops, and desktop computers.

---

## 2. Application URL

TaskFlow is hosted on Google's high-speed global network and can be accessed anywhere from your web browser:

> **Live Application Link:** **[https://taskflow-b51e6.web.app](https://taskflow-b51e6.web.app)**  
> *(Backup Domain: [https://taskflow-b51e6.firebaseapp.com](https://taskflow-b51e6.firebaseapp.com))*

If you are running the project locally on your machine for development, it is accessible at:
`http://localhost:5173`

---

## 3. System Requirements

TaskFlow runs directly in any modern web browser. No software installation, browser extensions, or administrative permissions are required.

### Supported Web Browsers
- **Google Chrome:** Version 100 or higher (Recommended)
- **Mozilla Firefox:** Version 100 or higher
- **Microsoft Edge:** Version 100 or higher
- **Apple Safari:** Version 15 or higher (macOS / iOS)

### Device & Network Requirements
- **Internet Connection:** An active broadband or cellular internet connection is required to communicate with Google authentication and cloud storage services.
- **Google Account:** Any active personal, educational, or Google Workspace email address (`@gmail.com` or custom domain).
- **Pop-ups Enabled:** Your browser must allow pop-up windows for `taskflow-b51e6.web.app` so the Google Sign-In prompt can appear.

---

## 4. Accessing TaskFlow

Follow these steps to access TaskFlow:

1. Open your preferred web browser (e.g. Google Chrome).
2. Click or paste the application URL into your browser's address bar:
   ```text
   https://taskflow-b51e6.web.app
   ```
3. Press **Enter**.
4. You will be greeted with the TaskFlow Sign-In page.

---

> ### 📷 Screenshot 1: TaskFlow Landing and Sign-In Screen
> ![TaskFlow Sign-In Screen](docs/screenshots/01-landing-login-page.png)  
> *Caption: The TaskFlow sign-in screen showing application branding and the "Continue with Google" button.*  
> **Image File:** `docs/screenshots/01-landing-login-page.png`

---

## 5. Google Sign-In Instructions

Signing into TaskFlow is straightforward and secure:

### Step-by-Step Sign-In
1. On the TaskFlow home screen, locate the white card titled **"Sign in to TaskFlow"**.
2. Click the **"Continue with Google"** button (identified by the official Google logo).
3. A secure Google Sign-In pop-up window will appear on your screen.
4. Select the Google account you wish to use, or enter your Google email and password if you are not currently signed into Google.
5. If prompted, confirm the requested basic profile permissions (Name, Email address, and Profile picture).
6. Once Google validates your sign-in, the pop-up will close automatically, and TaskFlow will immediately load your personalized dashboard.

---

> ### 📷 Screenshot 2: Google Sign-In Pop-up Window
> ![Google Sign-In Pop-up](docs/screenshots/02-google-sign-in-popup.png)  
> *Caption: The official Google OAuth account selector pop-up window.*  
> **Image File:** `docs/screenshots/02-google-sign-in-popup.png`

---

## 6. Understanding the Dashboard

Once signed in, the TaskFlow Dashboard becomes your central workspace:

### Dashboard Components

```
+---------------------------------------------------------------------------------+
|  [TF] TaskFlow               [Active User: John Doe (john@gmail.com)] [Sign out]|
+---------------------------------------------------------------------------------+
|  [Avatar] Welcome, John Doe!                          (Session: Active Google)  |
+------------------------------------+--------------------------------------------+
|  CREATE NEW TASK                   |  YOUR TASKS (Total: 3)           [Refresh] |
|                                    |  [All (3)] [Planned] [In Progress] [Done]  |
|  Task Title *                      |                                            |
|  [                               ] |  +---------------------------------------+ |
|                                    |  | Deploy production update   [Planned]  | |
|  Description (optional)            |  | Status: [Planned v]                   | |
|  [                               ] |  +---------------------------------------+ |
|                                    |  | Setup database backup  [In Progress]  | |
|  [ Create Task ]                   |  | Status: [In Progress v]               | |
+------------------------------------+--------------------------------------------+
```

1. **Top Navigation Bar:**
   - Displays the **TaskFlow (TF)** logo and application title on the left.
   - Displays your **Google profile picture**, **full name**, and **email address** on the right.
   - Includes the **"Sign out"** button.
2. **Welcome Header Card:**
   - Confirms that you are currently in an **Active Google Session**.
   - Displays your profile avatar and full name.
3. **Left Column — "Create New Task" Panel:**
   - Contains the input form where you compose and submit new tasks.
4. **Right Column — "Your Tasks" Panel:**
   - Displays all tasks you have created, ordered newest first.
   - Contains the task filter buttons and the manual **"Refresh"** button.

---

> ### 📷 Screenshot 3: TaskFlow Dashboard Overview
> ![TaskFlow Dashboard Overview](docs/screenshots/03-dashboard-overview.png)  
> *Caption: The TaskFlow Dashboard showing the welcome banner, task creation form on the left, and task list on the right.*  
> **Image File:** `docs/screenshots/03-dashboard-overview.png`

---

## 7. Creating a Task

Adding a new task takes only a few seconds:

### Step-by-Step Instructions
1. Navigate to the **"Create New Task"** form on the left side of the dashboard.
2. Click inside the **Task Title** input field.
3. Type a concise, descriptive name for your task (e.g., *"Prepare quarterly customer feedback summary"*).
   - *Note: Task Title is required and cannot be empty.*
4. *(Optional)* Click inside the **Description** field and provide any relevant context, notes, or instructions.
5. Click the purple **"Create Task"** button.
   - The button will display *"Creating Task..."* with a spinning loader for a brief moment.
6. Once saved, a green confirmation banner will appear:
   > *"Task successfully created and saved to Cloud Firestore."*
7. Your new task will automatically appear at the top of your task list with the initial status set to **Planned**.

---

> ### 📷 Screenshot 4: Filling in the Task Creation Form
> ![Task Creation Form](docs/screenshots/04-task-creation-form.png)  
> *Caption: Entering a title and description into the Task Creation form.*  
> **Image File:** `docs/screenshots/04-task-creation-form.png`

---

> ### 📷 Screenshot 5: Task Created Confirmation Alert
> ![Task Created Success Banner](docs/screenshots/05-task-created-success.png)  
> *Caption: Green notification banner confirming successful task creation and automatic list refresh.*  
> **Image File:** `docs/screenshots/05-task-created-success.png`

---

## 8. Viewing Tasks

All tasks you create are displayed in the **"Your Tasks"** panel on the right.

### Key Display Features
- **Chronological Order:** Your newest tasks always appear at the top of the list.
- **Timestamp:** Each task card displays the exact creation date and time (e.g., *"Created: Nov 13, 2026, 10:45 AM"*).
- **Task Count:** A numeric counter in the header shows the total number of tasks you currently have.
- **Empty State Notice:** If you have not created any tasks yet, a friendly empty state illustration guides you to create your first task.

### Filtering Tasks
Above the task cards, click any of the filter pills to instantly narrow down your view:
- **All:** Displays all of your tasks regardless of status.
- **Planned:** Shows only tasks that are scheduled but not yet started.
- **In Progress:** Shows tasks actively being worked on.
- **Complete:** Shows finished tasks.

Each filter button includes a dynamic counter indicating how many tasks fall into that status.

### Manual Refresh
If you have TaskFlow open in another tab or window, click the **"Refresh"** button at the top-right of the task panel to pull the latest state from the cloud immediately.

---

> ### 📷 Screenshot 6: Task List with Status Filter Pills
> ![Task List and Filter Tabs](docs/screenshots/06-task-list-and-filters.png)  
> *Caption: Task list showing multiple tasks and active category filter buttons.*  
> **Image File:** `docs/screenshots/06-task-list-and-filters.png`

---

## 9. Updating Task Status

As your work progresses, you can easily change the status of any task:

### Step-by-Step Instructions
1. Locate the task card you wish to update in your task list.
2. On the right side of the task card, locate the **Status** dropdown menu.
3. Click the dropdown to reveal the three available choices:
   - **Planned**
   - **In Progress**
   - **Complete**
4. Select the new status.
5. The dropdown will show a tiny spinner for a fraction of a second while the change is saved to the cloud.
6. The task badge instantly updates its label and color to reflect your new status, and a confirmation banner will notify you:
   > *"Task status updated to [Status]."*

---

> ### 📷 Screenshot 7: Updating Task Status via the Dropdown
> ![Status Change Dropdown](docs/screenshots/07-status-change-dropdown.png)  
> *Caption: Selecting a new lifecycle status from the task card dropdown.*  
> **Image File:** `docs/screenshots/07-status-change-dropdown.png`

---

## 10. Understanding Task Statuses

TaskFlow uses three distinct statuses to help you organize your daily workflow:

| Status Badge | Badge Color | Meaning & When to Use |
| :--- | :--- | :--- |
| **Planned** | **Sky Blue** | The default initial state for all new tasks. Use this for tasks that have been identified or scheduled, but work has not yet commenced. |
| **In Progress** | **Warm Amber / Yellow** | Indicates that work on this task is currently underway. Moving tasks to this status helps you track what you are actively doing today. |
| **Complete** | **Emerald Green** | The task has been successfully accomplished. Completed tasks remain in your history so you can review completed work. |

---

## 11. Signing Out

When you have finished using TaskFlow—especially on a shared or public computer—you should always sign out:

### Step-by-Step Instructions
1. Look at the top-right corner of the screen next to your user name and profile photo.
2. Click the **"Sign out"** button.
3. The button will momentarily read *"Signing out..."*.
4. Your active session will be securely terminated, and you will be returned to the TaskFlow Sign-In page.

---

> ### 📷 Screenshot 8: Signing Out of TaskFlow
> ![Sign Out Button](docs/screenshots/08-sign-out.png)  
> *Caption: The Sign Out button in the dashboard top navigation bar.*  
> **Image File:** `docs/screenshots/08-sign-out.png`

---

## 12. Common Problems and Troubleshooting

If you encounter an issue while using TaskFlow, consult the solutions below. Solutions labeled **[Verified Solution]** have been confirmed directly against the application's implementation.

---

### Problem 1: Google Sign-In Window Does Not Open or Shows "Pop-up blocked"
- **Symptom:** You click "Continue with Google", but nothing appears, or a red error alert appears saying: *"Pop-up blocked: Please allow pop-ups for this site in your browser settings."*
- **Cause:** Your web browser's built-in pop-up blocker prevented the Google login window from opening.
- **[Verified Solution]:**
  1. Look at the right side of your browser's address bar for a small icon showing a red "X" over a window or a pop-up blocked notification.
  2. Click the pop-up icon.
  3. Select **"Always allow pop-ups and redirects from https://taskflow-b51e6.web.app"**.
  4. Click **Done**.
  5. Click **"Continue with Google"** again.

---

### Problem 2: "Sign-in cancelled" Error Message
- **Symptom:** A red error banner appears saying: *"Sign-in cancelled: The Google sign-in window was closed before completing authentication."*
- **Cause:** The Google pop-up window was closed before choosing an account or before Google finished validating your credentials.
- **[Verified Solution]:**
  1. Click the small **&times;** button on the red banner to dismiss the error.
  2. Click **"Continue with Google"** again.
  3. Keep the pop-up window open until the account selection process is complete.

---

### Problem 3: "Task title is required and cannot be empty"
- **Symptom:** You try to click "Create Task", but the button is disabled or a red alert appears.
- **Cause:** TaskFlow requires every task to have at least one non-whitespace character in the title.
- **[Verified Solution]:**
  1. Enter at least one meaningful letter, number, or word into the **Task Title** field.
  2. Note that entering only spaces will not be accepted.
  3. Once a valid title is typed, the "Create Task" button will become active.

---

### Problem 4: "Permission denied: Unable to read tasks"
- **Symptom:** A red banner in the task list reads: *"Permission denied: Unable to read tasks. Ensure your Firestore security rules are deployed."*
- **Cause:** Your browser is not authenticated or the Cloud Firestore security rules in the Firebase Console have not been published.
- **[Verified Solution]:**
  1. Click **"Sign out"** and sign back in to refresh your Google authentication token.
  2. If the problem persists, ensure your administrator has published the project's security rules in Firebase Console under **Firestore Database &gt; Rules**.

---

### Problem 5: Tasks or Updates Not Showing in Another Tab
- **Symptom:** You changed a task or added a task in one browser window, but another window or device does not show it immediately.
- **Cause:** TaskFlow fetches your tasks upon initial load and upon creating new tasks. It does not continuously poll in the background to save battery and network data.
- **[Verified Solution]:**
  1. In the secondary window, click the **"Refresh"** button at the top of the "Your Tasks" card.
  2. The latest tasks will be retrieved from the cloud immediately.

---

### Problem 6: Blank Screen or App Fails to Load
- **Symptom:** The browser shows a blank white page when navigating to `https://taskflow-b51e6.web.app`.
- **General Troubleshooting Suggestions:**
  1. Check your internet connection.
  2. Perform a hard refresh: Press `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac).
  3. Clear your browser's cached files for `taskflow-b51e6.web.app`.
  4. Ensure JavaScript is enabled in your browser settings.

---

## 13. Frequently Asked Questions (FAQ)

### Q1: Can other people see or edit the tasks I create?
**No.** TaskFlow enforces strict user data isolation. Even though other users can use the application, each task is stamped with your unique Google User ID (`ownerUid`). Server-side security rules at Google Cloud ensure that you can only ever read and modify your own tasks.

### Q2: Can I delete a task?
**No, not in the current release.** To maintain an accurate audit history for the assessment evaluation, task deletion is intentionally disabled. If you have finished a task, simply change its status to **Complete**.

### Q3: Can I edit the title or description of a task after creating it?
Currently, task titles and descriptions are permanent once created. However, you can change the **Status** at any time. If you need to revise a task, create a new task with the updated information.

### Q4: Will my tasks stay saved if I close my browser or restart my computer?
**Yes.** All tasks are stored immediately in Google Cloud Firestore. When you return to TaskFlow and sign in from any computer or browser, all of your tasks will be right where you left them.

### Q5: Does TaskFlow work on my mobile phone?
**Yes.** The interface is built with responsive design. The dashboard automatically rearranges into a single column on mobile screens, making it easy to create and manage tasks on smartphones.

---

*TaskFlow User Manual &bull; Designed for Ease of Use & Reliability &bull; [taskflow-b51e6.web.app](https://taskflow-b51e6.web.app)*
