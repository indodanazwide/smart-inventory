# Smart Inventory Management

Smart Inventory Management is an admin application that allows users to perform CRUD operations on IoT resources using a RESTful API built with Express.js and MySQL.

## 🚀 Features
- User authentication (Admin access)
- Create, Read, Update, and Delete IoT resources
- RESTful API with structured endpoints
- MySQL database integration
- Middleware for logging, error handling, and security

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Authentication:** JWT (JSON Web Tokens)
- **Other:** dotenv, bcrypt, express-validator

## 📂 Project Structure
```
smart-inventory/
│-- src/
│   ├── controllers/  # API logic
│   ├── models/       # Database models
│   ├── routes/       # API endpoints
│   ├── config/       # Database connection
│   ├── middleware/   # Auth & validation
│   ├── app.js        # Express app instance
│   ├── server.js     # Entry point
│-- .env.example
│-- package.json
│-- README.md
```

## 🏗 Installation
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/indodanazwide/smart-inventory.git
cd smart-inventory
```
### 2️⃣ Install Dependencies
```sh
npm install
```
### 3️⃣ Configure Environment Variables
Rename `.env.example` to `.env` and update the values:
```
DB_HOST=your_db_host
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=smart_inventory
JWT_SECRET=your_secret_key
PORT=5000
```
### 4️⃣ Setup MySQL Database
```sh
mysql -u root -p
CREATE DATABASE smart_inventory;
```
### 5️⃣ Run Migrations (if applicable)
```sh
npm run migrate
```
### 6️⃣ Start the Server
```sh
npm start
```
Server runs on `http://localhost:5000`

## 📡 API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/api/devices` | Get all IoT devices |
| POST | `/api/devices` | Add a new device |
| GET | `/api/devices/:id` | Get device by ID |
| PUT | `/api/devices/:id` | Update device by ID |
| DELETE | `/api/devices/:id` | Delete device by ID |

## 🤝 Contributing
1. Fork the repository
2. Create a new branch (`feature-branch`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push to GitHub (`git push origin feature-branch`)
5. Open a Pull Request

## 📜 License
This project is licensed under the MIT License.

---
Developed by [indodanazwide](https://github.com/indodanazwide) 🚀

