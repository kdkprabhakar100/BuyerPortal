const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const favouriteRoutes = require("./routes/favouriteRoutes");

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();


app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/favourites", favouriteRoutes);

app.get("/", (req, res) => {
  res.send("Server + DB working");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});