

## 📌 What is MVC?

**MVC** stands for **Model – View – Controller**. It is a software design pattern that divides an application into three interconnected parts, so that each part has its own responsibility.

This separation is also known as **Separation of Concerns (SoC)**.

---

## 🎯 Why do we need MVC?

Without MVC, all the code (database logic, business rules, UI) often gets mixed in one place. This makes the project:

- ❌ Hard to read
- ❌ Hard to debug
- ❌ Hard to scale
- ❌ Difficult for teams to work together

With MVC, the code becomes **organized, reusable, and easy to maintain**.

---

## 🧱 The Three Components

### 1️⃣ Model
- Handles **data and business logic**
- Talks to the **database**
- Does not care about how data is displayed

**Example:** User details, product data, database queries.

### 2️⃣ View
- Handles the **User Interface (UI)**
- Displays data to the user
- Contains HTML, CSS, templates, etc.

**Example:** Login page, dashboard, product list page.

### 3️⃣ Controller
- Acts as the **bridge between Model and View**
- Receives user input/requests
- Calls the Model to get/update data
- Sends the result to the View

**Example:** Handling a login form submission.

---

## 🔄 How MVC Works (Flow)

```
        ┌──────────┐
        │   User   │
        └────┬─────┘
             │ 1. Sends request
             ▼
       ┌────────────┐
       │ Controller │
       └──┬──────▲──┘
          │      │
 2. Asks  │      │ 3. Returns data
   data   ▼      │
       ┌────────────┐
       │   Model    │ ◄──► Database
       └────────────┘
             
          Controller
              │ 4. Sends data to View
              ▼
        ┌──────────┐
        │   View   │
        └────┬─────┘
             │ 5. Response shown to user
             ▼
        ┌──────────┐
        │   User   │
        └──────────┘

**Sunny**

Aspiring Backend Developer passionate about Node.js, Express.js, MongoDB, and Python. I enjoy building scalable backend applications, REST APIs, and learning modern technologies. Currently exploring Backend Development, Database Design, and AI-powered applications through hands-on projects and continuous learning.

📍 Hazaribag, Jharkhand, India

🚀 Tech Stack:
- Node.js
- Express.js
- MongoDB
- Mongoose
- Git & GitHub
