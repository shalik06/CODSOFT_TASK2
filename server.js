const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { sequelize, connectDB } = require("./config/database");
require("./models/Contact");

const contactRoutes = require("./routes/contactRoutes");

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROOT ROUTE
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Contact Management System API is running!"
    });
});

// HEALTH CHECK
app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is healthy"
    });
});

// CONTACT ROUTES
app.use("/api/contacts", contactRoutes);

// 404 HANDLER
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "API route not found"
    });
});

// START SERVER
const startServer = async () => {
    try {
        await connectDB();

        await sequelize.sync();

        console.log("Database Tables Created Successfully!");

        const PORT = process.env.PORT || 5000;

        app.listen(PORT, () => {
            console.log("-----------------------------------");
            console.log(`Server running at http://localhost:${PORT}`);
            console.log("Contact API: /api/contacts");
            console.log("Contact Management System API Ready!");
            console.log("-----------------------------------");
        });

    } catch (error) {
        console.error("Server Startup Failed:", error.message);
        process.exit(1);
    }
};

startServer();