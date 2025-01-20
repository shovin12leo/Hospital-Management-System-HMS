# Hospital-Management-System-HMS-
The Hospital Management System (HMS) will include essential features like patient records, doctor management, appointments, and billing. We'll build it step by step using Node.js, Angular 15, and MongoDB, ensuring it runs locally.

# Hospital Management System (HMS) 🚑

## 📌 Project Overview

The **Hospital Management System (HMS)** is a full-stack web application built using **Node.js, Angular 15, and MongoDB**. It provides a streamlined system for managing hospital operations, including **patient records, doctor management, appointments, and billing**.

## 🚀 Tech Stack

- **Backend:** Node.js with Express.js
- **Database:** MongoDB (MongoDB Compass for GUI)
- **API Testing:** Postman
- **Hosting:** Runs locally on  `localhost:5000` (Node.js API)

---

## 📖 Features

### 🏥 Hospital Management

- **User Authentication:** Signup/Login system
- **Doctor Management:** Add, Update, Delete doctors
- **Patient Records:** Create, View, Update, Delete patient records
- **Appointment Scheduling:** Book, modify, and cancel appointments
- **Billing System:** Generate invoices, process payments

### 🎨 UI Pages

- **Login & Signup Pages**
- **Doctor Dashboard**
- **Patient Records Page**
- **Appointment Booking Page**
- **Billing Page**

---

## 🛠️ Setup & Installation

### 1️⃣ Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (Use MongoDB Compass for easy management)


### 2️⃣ Clone the Repository

```bash
git clone https://github.com/shovin12leo/Hospital-Management-System-HMS-.git
cd hospital-management-system-HMS
```

### 3️⃣ Backend Setup (Node.js + Express)

```bash
cd backend
npm init -y  #Initialize a Node.js project

npm install express mongoose cors dotenv   # Install dependencies
npm start    # Start the backend server (runs on localhost:5000)
```



---

## 🔗 API Endpoints

### User Authentication

- `POST [/api/auth/signup](http://localhost:5000/api/auth/signup)` – User registration
- `POST [/api/auth/login](http://localhost:5000/api/auth/login)` – User login

### Doctor Management

- `POST [/api/doctors]((http://localhost:5000/api/doctors/add))` – Add a new doctor
- `GET [/api/doctors](http://localhost:5000/api/doctors/all)` – Get list of doctors
- `PUT [/api/doctors/:id](http://localhost:5000/api/doctors/update/:id)` – Update doctor details
- `DELETE [/api/doctors/:id](http://localhost:5000/api/doctors/delete/:id)` – Remove a doctor

### Patient Records

- `POST [/api/patients](http://localhost:5000/api/patients/add)` – Add a new patient
- `GET [/api/patients](http://localhost:5000/api/patients/all)` – View all patients
- `GET [/api/patients](http://localhost:5000/api/patients/:id)`- View By patients ID
- `PUT [/api/patients/:id](http://localhost:5000/api/patients/update/:id)` – Update patient info
- `DELETE [/api/patients/:id](http://localhost:5000/api/patients/delete/:id)` – Delete patient record

### Appointments

- `POST [/api/appointments](http://localhost:5000/api/appointments/book)` – Book an appointment
- `GET [/api/appointments](http://localhost:5000/api/appointments/all)` – View all appointments
- `GET [/api/appointments]((http://localhost:5000/api/appointments/patient/:id))` - View By appointments ID
- `PUT [/api/appointments/:id](http://localhost:5000/api/appointments/update/:id)` – Update appointment
- `DELETE [/api/appointments/:id](http://localhost:5000/api/appointments/delete/:id)` – Cancel appointment

### Billing

- `POST [/api/billing](http://localhost:5000/api/billings/generate)` – Generate invoice
- `GET [/api/billing/:id](http://localhost:5000/api/billings/patient/:id)` – View invoice details By ID
-  `GET [/api/billing/:id]((http://localhost:5000/api/billings/all))` - View All invoice details
-  `GET [/api/billing/:id] ((http://localhost:5000/api/billings/update/:id))` - Update Billing Payment Status
-  `DELETE [/api/billing](http://localhost:5000/api/billings/delete/:id)`- Delete Billing Record 

---

## 🧪 Testing the Application

1. **API Testing:** Use [Postman](https://www.postman.com/) to test API endpoints.
2. **Database Management:** Use **MongoDB Compass** to view stored data.
3. **Frontend Testing:** Run the Angular app and test UI interactions.

---


## **📌 Current To-Do List:**  
- [ ] **Implement form validation & error handling** – Ensure that user inputs are properly validated, and errors are handled gracefully.  
- [ ] **Add search & filter functionality** – Allow users to search and filter doctors, patients, and appointments for better navigation.  
- [ ] **Display user’s name, class, date & time on the Home screen** – Required as per your **Advanced Application Development assignment**.  
- [ ] **Final testing and deployment** – Test the application thoroughly and ensure it runs smoothly before submission.  

Let me know if you want to **add, remove, or modify** any tasks from this list! 😊

## 📜 License

This project is licensed under the **MIT License**.


### 🌟 Show Your Support!

If you like this project, don't forget to ⭐ the repo!

