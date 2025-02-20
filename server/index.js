require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth'); 
const userRoutes = require('./routes/users');

const app = express();
exports.app = app;
const PORT = 4000;
const db = process.env.MONGO_URL;

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from the frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    credentials: true // If you need cookies or auth headers
 }));

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    });
})
.catch((err) => {
    console.log('Connection failed:', err.message);
});

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
