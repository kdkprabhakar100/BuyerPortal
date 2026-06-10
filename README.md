# BUYER PORTAL WEB APPLICATION

A modern and responsive real estate dashboard built using React and Node.js.  
Users can browse properties, add favourites, and view them in a clean UI.

---




## 🚀 Features

- View all properties
- Add / remove favourites
- Dashboard stats (total properties, favourites, users)
- Fully responsive design (mobile + desktop)
- Sliding favourites section (carousel style)
- Authentication (Login / Register)
- Fast and clean UI using Tailwind CSS

---

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB (Mongoose)

---

## Project Structure
- 
techcraft/
├── backend/
├── frontend/
├── package.json
├── package-lock.json
└── README.md

## How to Run or Install dependencies
# Frontend
    - cd frontend
    - npm install
    -npm start
# Backend
    - cd backend
    - npm install
    - node server.js

## API Endpoints
 - GET properties / favourite
 - POST favourite- add/remove

 ## Author
 **Prabhakar Khadka**
 
 ## Portfolio
 https://www.khadkaprabhakar.com.np

## GITHUB
https://github.com/kdkprabhakar100

## Gmail
kdkprabhakar100@gmail.com

## live website
https://buyer-portal-sigma.vercel.app/

## API Rendering
https://buyerportal.onrender.com

## Mobile View
![alt text](image.png)

## Laptop view
![alt text](image-1.png)

## Application Flow
[User]
   ↓
[Frontend (React)]
   ↓
[Auth System]
   ├── Register
   └── Login
   ↓
[JWT Authentication]
   ↓
[Dashboard]
   ├── View Properties
   ├── Add to Favourites
   ├── Remove from Favourites
   └── View User Count
   ↓
[Backend (Node.js / Express)]
   ↓
[MongoDB Database]




## .env
# backend
PORT=5000
MONGO_URI=mongodb://admin:admin12345@ac-z53eohl-shard-00-00.ljpvx0a.mongodb.net:27017,ac-z53eohl-shard-00-01.ljpvx0a.mongodb.net:27017,ac-z53eohl-shard-00-02.ljpvx0a.mongodb.net:27017/realestate?ssl=true&replicaSet=atlas-1l2qr8-shard-0&authSource=admin&retryWrites=true&w=majority
JWT_SECRET=pk_secret_key

# frontend
REACT_APP_API_URL=https://buyerportal.onrender.com
