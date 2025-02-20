const { Router } = require('express');
const CryptoJS = require("crypto-js");
const User = require("../model/userSchema");
const jwt = require("jsonwebtoken");
const router = Router();

// Register User
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Validation
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email is already registered." });
        }

        // Encrypt password
        const encryptedPassword = CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString();

        // Create new user
        const newUser = new User({
            username,
            email,
            password: encryptedPassword,
        });

        // Save user to database
        const savedUser = await newUser.save();

        // Return success message
        res.status(201).json({ message: "User registered successfully!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error." });
    }
});

// Login User
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password." });
        }

        // Decrypt the stored password
        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        // Compare passwords
        if (originalPassword !== password) {
            return res.status(401).json({ message: "Invalid email or password." });
        }

        const acessToken = jwt.sign({
            id : user._id, 
            isAdmine : user.isAdmine

        },
        process.env.SECRET_KEY,
        {
            expiresIn : "2d"
        }
    );

        // Exclude password from response
        const { password: _, ...userDetails } = user._doc;
        res.status(200).json({...userDetails, acessToken});
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error." });
    }
});

module.exports = router;
