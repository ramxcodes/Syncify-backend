
# 🎵 Syncify Backend 🎵

## 🌟 Introduction

Syncify Backend is a powerful and scalable backend solution for a music streaming platform. It provides robust features such as user authentication, song and album management, real-time communication, and scheduled tasks.

`Some Features -`

🎸 Control music playback with next and previous song options </br>
🔈 Adjust the volume seamlessly using a slider</br>
🎧 Admin dashboard for managing albums and adding new songs</br>
💬 Real-time chat integrated within Spotify</br>
👨🏼‍💼 Track users' online and offline status</br>
👀 View what others are listening to in real-time</br>
📊 Collect data for analytics insights</br>

---
`Tech Stack -`

[![Tech](https://skillicons.dev/icons?i=nodejs,express,mongodb,js,git,github,vscode)](https://syncify.rocks)

## 📚 Table of Contents

- [🌟 Introduction](#-introduction)
- [🚀 Installation](#-installation)
- [🛠️ Usage](#️-usage)
- [✨ Features](#-features)
- [📦 Dependencies](#-dependencies)
- [⚙️ Scripts](#️-scripts)
- [🔧 Configuration](#-configuration)
- [📊 API Endpoints](#-api-endpoints)
- [🙌 Contributors](#-contributors)
- [📜 License](#-license)

---

## 🚀 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ramxcodes/Syncify-backend.git
   cd syncify-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Define the following variables:
     ```dotenv
     PORT=<your-port>
     MONGODB_URL=<your-database-url>
     ADMIN_EMAIL=<admin-email>
     CLOUDINARY_API_KEY=<your-cloudinary-api-key>
     CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
     CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
     NODE_ENV=development
     CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
     CLERK_SECRET_KEY=<your-clerk-secret-key>
     ```

---

## 🛠️ Usage

### Start the server

- Development mode:
  ```bash
  npm run dev
  ```
- Production mode:
  ```bash
  npm start
  ```

The server will be accessible at `http://localhost:<PORT>`.

---

## ✨ Features

- **👤 User Management:** APIs for user registration, login, and profile updates.
- **🔑 Authentication:** Secure user authentication using **Clerk**.
- **🎶 Song Management:** Upload, delete, and fetch songs. Features include:
  - Trending songs
  - Personalized recommendations
  - Featured playlists
- **💿 Album Management:** Create, delete, and fetch albums, including song associations.
- **📡 Real-Time Communication:** Enable live chat & see what others are listening to.
- **📊 Analytics:** Provide detailed statistics on admin page with number of songs, albums, users, and artists.
- **📂 File Uploads:** Handle media uploads via Cloudinary with size limits and temporary storage.
- **⏱️ Scheduled Jobs:** Automatically clean temporary files using `node-cron`.

---

## 📦 Dependencies

### Core Dependencies

- `express` - Web framework
- `mongoose` - MongoDB object modeling
- `dotenv` - Manage environment variables
- `cors` - Enable CORS
- `socket.io` - Real-time communication
- `cloudinary` - Media uploads
- `express-fileupload` - File handling middleware
- `node-cron` - Cron job scheduling

### Development Dependencies

- `nodemon` - Auto-restart server on changes

Check `package.json` for the full list of dependencies.

---

## ⚙️ Scripts

- `npm run dev`: Start the server in development mode.
- `npm run start`: Start the server in production mode.
- `npm run seed:songs`: Seed the database with song data.
- `npm run seed:albums`: Seed the database with album data.

---

## 🔧 Configuration

- **Environment Variables:** Defined in `.env` file.
- **CORS Settings:** Configured for `http://localhost:3000`.
- **File Uploads:** Temporary files stored in the `tmp` directory with a 10 MB limit.

---

## 📊 API Endpoints

### User Routes

- `/api/users` - Manage users
- `/api/users/messages` - Retrieve user messages

### Auth Routes

- `/api/auth` - User authentication

### Admin Routes

- `/api/admin` - Admin functionalities
- `/api/admin/create-song` - Add a new song
- `/api/admin/create-album` - Add a new album

### Song Routes

- `/api/songs` - Retrieve all songs
- `/api/songs/trending` - Fetch trending songs
- `/api/songs/featured` - Fetch featured songs
- `/api/songs/made-for-you` - Personalized recommendations

### Album Routes

- `/api/albums` - Retrieve all albums
- `/api/albums/:albumId` - Retrieve album details by ID

### Statistics Routes

- `/api/stats` - Get platform statistics
