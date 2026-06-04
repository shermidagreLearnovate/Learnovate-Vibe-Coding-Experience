# 🚀 API Documentation - Task Management System

The backend is built with **NestJS** and follows RESTful principles. All endpoints are prefixed with the base URL (default: `http://localhost:3000`).

---

## 📋 Endpoints Overview

| Method | Endpoint | Description |
|---|---|---|
| **GET** | `/tasks` | Retrieve all tasks. |
| **GET** | `/tasks/:id` | Retrieve a single task by ID. |
| **POST** | `/tasks` | Create a new task. |
| **PATCH** | `/tasks/:id` | Update an existing task. |
| **DELETE** | `/tasks/:id` | Remove a task from the system. |

---

## 🛠️ Detailed Endpoint Reference

### 1. Get All Tasks
**GET** `/tasks`
- **Description:** Returns an array of all tasks stored in the database.
- **Success Response:** `200 OK`
- **Sample Payload:**
  ```json
  [
    {
      "id": "uuid-1234",
      "title": "Fix bug in production",
      "description": "Critical fix for auth module",
      "status": "TODO",
      "priority": "HIGH",
      "createdAt": "2026-06-04T12:00:00Z"
    }
  ]
  ```

### 2. Create Task
**POST** `/tasks`
- **Description:** Creates a new task in the database.
- **Request Body:**
  | Field | Type | Mandatory | Default |
  |---|---|---|---|
  | `title` | String | Yes | - |
  | `description` | String | No | `null` |
  | `status` | Enum | No | `TODO` |
  | `priority` | Enum | No | `MEDIUM` |
- **Special Rules:** If `priority` is set to `HIGH`, the backend automatically prefixes the title with `[URGENT] `.
- **Success Response:** `201 Created`

### 3. Update Task
**PATCH** `/tasks/:id`
- **Description:** Updates one or more fields of an existing task.
- **Path Parameter:** `id` (UUID)
- **Request Body:** Partial `Task` object (e.g., `{ "title": "New Title" }` or `{ "status": "DONE" }`).
- **Success Response:** `200 OK`

### 4. Get Task by ID
**GET** `/tasks/:id`
- **Description:** Retrieves details for a specific task.
- **Path Parameter:** `id` (UUID)
- **Error Response:** `404 Not Found` if the ID doesn't exist.
- **Success Response:** `200 OK`

### 5. Delete Task
**DELETE** `/tasks/:id`
- **Description:** Permanently removes a task from the system.
- **Path Parameter:** `id` (UUID)
- **Success Response:** `200 OK`

---

## 📊 Data Types & Enums

### `TaskStatus`
`TODO` | `IN_PROGRESS` | `DONE`

### `Priority`
`LOW` | `MEDIUM` | `HIGH`

---

## 🧪 Testing the API
You can test these endpoints using tools like **Postman**, **Insomnia**, or **cURL**:

```bash
# Example: Create a task via cURL
curl -X POST http://localhost:3000/tasks \
     -H "Content-Type: application/json" \
     -d '{"title": "Documentation Task", "priority": "HIGH"}'
```
