# 💼 CareerConnect – Job & Internship Portal

<p align="center">
  <strong>Connecting Students with Career Opportunities</strong>
</p>

<p align="center">
  A Full-Stack Web Application for Discovering Jobs and Internships
</p>

---

## 📌 About the Project

**CareerConnect – Job & Internship Portal** is a full-stack web application developed to simplify the process of finding and applying for job and internship opportunities.

The platform provides students and fresh graduates with a centralized environment to explore career opportunities, search for relevant jobs, filter listings based on their preferences, and submit applications online with resume uploads.

The application integrates a modern React frontend, a Node.js and Express backend, and a MySQL database to provide an organized and user-friendly experience.

## ✨ Key Features

- 🔐 **User Authentication** – User registration and secure login.
- 💼 **Job Listings** – Explore available jobs and internship opportunities.
- 🔎 **Smart Search** – Search opportunities using relevant keywords.
- 📍 **Location Filter** – Find opportunities based on location.
- 🗂️ **Category Filter** – Filter opportunities by job category.
- 💻 **Job Type Filter** – Explore internships and different job types.
- 📝 **Online Applications** – Apply for suitable opportunities through the portal.
- 📄 **Resume Upload** – Upload resumes in PDF, DOC, and DOCX formats.
- 📋 **My Applications** – View previously submitted applications.
- 🎨 **User-Friendly Interface** – Simple and intuitive navigation.

## 🛠️ Technology Stack

### Frontend
- ⚛️ React.js
- 🌐 HTML5
- 🎨 CSS3
- 📜 JavaScript
- ⚡ Vite

### Backend
- 🟢 Node.js
- 🚀 Express.js
- 🔗 REST API

### Database
- 🗄️ MySQL
- 🖥️ XAMPP
- 📊 phpMyAdmin

### Development Tools
- 💻 Visual Studio Code
- 📦 npm
- 🔧 Git & GitHub

## 🏗️ Application Architecture

The application follows a three-layer architecture:

1. **Presentation Layer:** React.js provides the user interface and handles user interactions.
2. **Application Layer:** Node.js and Express.js process requests, manage authentication, and handle job applications.
3. **Data Layer:** MySQL stores user information, job listings, and application records.

## 📂 Project Structure

```text
Job-Intenship-portal/
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
├── backend/
│   ├── db.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md
```

## ⚙️ Installation and Setup

### Prerequisites

- Node.js and npm
- MySQL
- XAMPP
- Visual Studio Code

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd Job-Intenship-portal
```

### 2. Configure the Database

1. Open XAMPP Control Panel.
2. Start Apache and MySQL.
3. Open phpMyAdmin.
4. Create a database named `pushdb`.
5. Execute the project's SQL script to create the required tables and insert sample job records.

### 3. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend directory:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=pushdb
JWT_SECRET=your_secret_key
```

Start the backend server:

```bash
npm run dev
```

### 4. Frontend Setup

Open a separate terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local development URL displayed in the terminal, usually:

```text
http://localhost:5173
```

## 🎯 Project Objectives

- Provide a centralized platform for job and internship opportunities.
- Simplify the job discovery and application process.
- Help students explore career opportunities based on their interests.
- Enable convenient online resume submission.
- Demonstrate practical full-stack web development and database integration.

## 🚀 Future Enhancements

- 👨‍💼 Administrator Dashboard
- 🏢 Company and Recruiter Profiles
- 📧 Email Notifications
- 📊 Advanced Application Tracking
- 🎓 Student Profile Management
- 🤖 Skill-Based Job Recommendations
- 📈 Career Analytics and Reports

## 🌟 Project Outcome

CareerConnect demonstrates the integration of frontend development, backend API implementation, database management, user authentication, and resume upload functionality in a single web application.

It aims to make career opportunities more accessible to students and fresh graduates through a simple and organized digital platform.

## 👩‍💻 Project Information

| Details | Description |
|---|---|
| Project Name | CareerConnect – Job & Internship Portal |
| Project Type | Full-Stack Web Application |
| Frontend | React.js |
| Backend | Node.js & Express.js |
| Database | MySQL |
| Development Environment | VS Code & XAMPP |

---

<p align="center">
  <strong>Built with ❤️ to connect students with opportunities.</strong>
</p>

<p align="center">
  ⭐ If you find this project useful, consider giving it a star!
</p>
