# HNG12 Public API

## Project Overview
This is a simple public API developed for the **HNG12** task. It provides a JSON response containing the developer's registered email, the current timestamp in **ISO 8601 format**, and the GitHub repository URL.

## Features
- Returns the registered email address.
- Generates the current date and time in **ISO 8601 format (UTC)**.
- Provides the GitHub repository URL of the project.
- Handles **CORS** for cross-origin requests.
- Deployable to a publicly accessible endpoint.

---

## Technologies Used
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast and minimal web framework for Node.js
- **CORS** - Middleware for handling Cross-Origin Resource Sharing
- **Jest & Supertest** - For API testing

---

## API Documentation
### **Base URL**
`<your-deployed-url>`

### **Endpoint:** `GET /`
**Response Format:** JSON

#### **Example Response (200 OK)**
```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```

#### **Error Response (Invalid Route - 404 Not Found)**
```json
{
  "error": "Route not found"
}
```

---

## Installation & Setup
### **Prerequisites**
Ensure you have **Node.js** installed on your system.

### **Clone the Repository**
```sh
git clone https://github.com/kikachukwu137/HNG12-API.git
cd HNG12-API
```

### **Install Dependencies**
```sh
npm install
```

### **Run the Server Locally**
```sh
npm start
```
The server will start at `http://localhost:3000/` (or your specified port).

### **Run Tests**
```sh
npm test
```

---

## Deployment
This API must be **deployed** to a publicly accessible endpoint. You can deploy it using **Render, Vercel, Railway, or any cloud provider** of your choice.

### **Deploy to Render (Example)**
1. Create an account on [Render](https://render.com/)
2. Link your GitHub repository
3. Select **Node.js** as the environment
4. Set `start command` as:
   ```sh
   node index.js
   ```
5. Deploy 🚀

---

## Links
- **GitHub Repository**: [https://github.com/kikachukwu137/HNG12-API](https://github.com/kikachukwu137/HNG12-API)


---

## Author
👤 **Egwaoje Daniel Kikachukwu**

Feel free to fork, improve, and contribute to this project!

# HNG12-Public-API
