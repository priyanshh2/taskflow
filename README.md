# TaskFlow — Modern Task Management Application

[![Live App](https://img.shields.io/badge/Live%20App-taskflow--b51e6.web.app-4285F4?style=flat&logo=firebase&logoColor=white)](https://taskflow-b51e6.web.app)
[![GitHub Repository](https://img.shields.io/badge/GitHub-priyanshh2%2Ftaskflow-181717?style=flat&logo=github&logoColor=white)](https://github.com/priyanshh2/taskflow.git)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=flat&logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4.0-38B2AC?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Firebase](https://img.shields.io/badge/Firebase-v13-FFCA28?style=flat&logo=firebase&logoColor=black)](https://firebase.google.com)

TaskFlow is a modern, responsive personal task management application built as part of the Graduate Support Engineer Trainee technical assessment. The application features federated Google OAuth authentication, serverless Cloud Firestore data persistence, strict user-level data isolation via Firestore Security Rules, and deployment on Firebase Hosting.

---

## 🌐 Live Application & Links

- **Production Live URL:** **[https://taskflow-b51e6.web.app](https://taskflow-b51e6.web.app)**
- **Alternate Domain:** **[https://taskflow-b51e6.firebaseapp.com](https://taskflow-b51e6.firebaseapp.com)**
- **GitHub Repository:** **[https://github.com/priyanshh2/taskflow.git](https://github.com/priyanshh2/taskflow.git)**

---

## 📚 Project Documentation

Comprehensive documentation has been prepared to meet the assessment requirements:

1. 📄 **[Technical Documentation (TECHNICAL_DOCUMENTATION.md)](TECHNICAL_DOCUMENTATION.md)**  
   *Written for assessment evaluators and engineering peers.*  
   Covers system architecture, requirement traceability, data models, Firestore security rules, validation, challenges faced, deployment procedures, limitations, and an exhaustive **AI Usage Summary**.

2. 📖 **[User Manual (USER_MANUAL.md)](USER_MANUAL.md)**  
   *Written for first-time, non-technical users.*  
   Provides a step-by-step walkthrough covering Google Sign-In, the dashboard layout, creating tasks, updating status lifecycles, signing out, troubleshooting guide, and FAQs.

3. 📷 **[Screenshot Checklist & Guide (docs/screenshots/README.md)](docs/screenshots/README.md)**  
   *Checklist of recommended screenshot filenames, states, and insertion points.*

---

## ⚡ Key Features

- **Google Authentication:** Secure, zero-friction sign-in via Google OAuth popup (`signInWithPopup`).
- **Session Persistence:** Automatic browser session restoration on refresh; unauthenticated visitors are prevented from accessing the dashboard.
- **Task Management Lifecycle:** Create tasks with mandatory titles and optional descriptions; transition tasks through `Planned`, `In Progress`, and `Complete`.
- **Strict Multi-User Isolation:** Each task document is indexed by `ownerUid`. Cloud Firestore Security Rules enforce that users can only ever query, read, or modify their own tasks.
- **Live Filtering & Metrics:** Instant filter pills (`All`, `Planned`, `In Progress`, `Complete`) with dynamic counters and manual refresh.
- **Responsive Design:** Clean, modern interface styled with Tailwind CSS v4, optimized for mobile phones, tablets, and desktop displays.
- **Friendly Error Handling:** User-focused error messages mapping Firebase authentication exceptions and network anomalies into actionable instructions.

---

## 🛠️ Technology Stack

| Domain | Technology | Version | Description |
| :--- | :--- | :--- | :--- |
| **Frontend Framework** | React | `^19.0.0` | Declarative UI, hooks, Context API |
| **Tooling & Bundler** | Vite | `^6.2.0` | Fast HMR development server and Rollup production build |
| **Styling** | Tailwind CSS | `^4.0.12` | Modern utility-first CSS via `@tailwindcss/vite` |
| **Authentication** | Firebase Authentication | `^13.3.0` | Google OAuth 2.0 provider |
| **Database** | Cloud Firestore | `^13.3.0` | Serverless NoSQL document database |
| **Security** | Firestore Security Rules | Version 2 | Server-side user data isolation and schema validation |
| **Hosting** | Firebase Hosting | v15.x CLI | High-speed edge CDN with SPA routing rewrites |
| **Version Control** | Git & GitHub | Git 2.x | Source control on branch `main` |

---

## 📁 Repository Structure

```text
taskflow/
├── .firebaserc                # Firebase CLI project binding (taskflow-b51e6)
├── firebase.json              # Firebase Hosting configuration & SPA rewrites
├── firestore.rules            # Cloud Firestore Security Rules for user isolation
├── package.json               # Root scripts to orchestrate client commands
├── .gitignore                 # Excludes .env, .env.local, node_modules, dist, .firebase
├── README.md                  # Project overview and entry point (this file)
├── TECHNICAL_DOCUMENTATION.md # Detailed technical report & AI usage disclosure
├── USER_MANUAL.md             # Non-technical step-by-step user guide
├── docs/
│   └── screenshots/           # Screenshot guide and image assets
└── client/                    # React frontend application
    ├── .env.example           # Template for Firebase environment keys
    ├── index.html             # Application HTML entry point
    ├── package.json           # Client dependencies and scripts
    ├── vite.config.js         # Vite configuration with React and Tailwind CSS v4
    └── src/
        ├── App.jsx            # Main app shell with AuthProvider and route guards
        ├── index.css          # Global CSS importing @tailwindcss
        ├── main.jsx           # React DOM entry point
        ├── components/
        │   ├── Dashboard.jsx  # Authenticated workspace, user profile & responsive layout
        │   ├── LoadingSpinner.jsx # Loading screen during auth state check
        │   ├── Login.jsx      # Sign-in card with Google OAuth trigger
        │   ├── TaskForm.jsx   # Form to create tasks with validation
        │   ├── TaskItem.jsx   # Individual task card with status badge & select dropdown
        │   └── TaskList.jsx   # Task list view with status filter pills and counter badges
        ├── context/
        │   └── AuthContext.jsx # Global auth context provider (user, login, logout)
        ├── firebase/
        │   └── firebase.js    # Firebase app initialization and service exports
        ├── services/
        │   └── taskService.js # Firestore task CRUD operations with fallback logic
        └── utils/
            └── errorUtils.js  # Friendly error message translation utility
```

---

## 🚀 Local Development Setup

To run TaskFlow on your local development machine:

### 1. Prerequisites
- **Node.js:** v18.0.0 or higher (Node v20+ recommended)
- **npm:** v9.0.0 or higher

### 2. Clone the Repository
```bash
git clone https://github.com/priyanshh2/taskflow.git
cd taskflow
```

### 3. Install Dependencies
```bash
# Install root and client dependencies
npm install --prefix client
```

### 4. Configure Environment Variables
Create a file named `.env.local` inside the `client/` folder:
```bash
cp client/.env.example client/.env.local
```

Populate `client/.env.local` with your Firebase web app configuration:
```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 5. Start Development Server
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser.

### 6. Production Build
To create an optimized production build:
```bash
npm run build
```
Compiled output will be placed in `client/dist`.

---

## 🔒 Firestore Security Rules

TaskFlow enforces server-side security via [firestore.rules](file:///c:/Users/Priyanshu/OneDrive/Desktop/taskflow/firestore.rules):
- **Read & Update:** Allowed **only** if the authenticated user's UID matches `resource.data.ownerUid`.
- **Create:** Allowed **only** if `ownerUid == request.auth.uid`, title is non-empty (1–200 characters), and initial status is `'Planned'`.
- **Status Updates:** Restricted to valid statuses (`'Planned'`, `'In Progress'`, `'Complete'`); other document fields cannot be tampered with.
- **Delete:** Explicitly disabled (`allow delete: if false;`).

---

## 🧪 Multi-User Isolation Verification

To verify that one user cannot see or modify another user's tasks:
1. Open [https://taskflow-b51e6.web.app](https://taskflow-b51e6.web.app) and sign in with **Google Account A**.
2. Create 2 tasks (e.g. *"Task A1"*, *"Task A2"*).
3. Open a separate Private/Incognito browser window, visit the same URL, and sign in with **Google Account B**.
4. Notice that Account B's dashboard shows **0 tasks** and displays the empty state message.
5. Create a task with Account B (*"Task B1"*).
6. Return to Account A's window and click **Refresh**: Account A will see only their own tasks (*"Task A1"*, *"Task A2"*), never Account B's task.

---

## 📦 Deployment to Firebase Hosting

TaskFlow is configured for one-command deployment to Firebase Hosting:
```bash
# 1. Build client bundle
npm run build

# 2. Deploy only Hosting to Firebase
firebase deploy --only hosting
```
Live URL: **[https://taskflow-b51e6.web.app](https://taskflow-b51e6.web.app)**

---

## 📄 License & Credits

Built by **Priyanshu Jaiswal** for the Graduate Support Engineer Trainee technical assessment.  
&copy; 2026 TaskFlow. All rights reserved.
