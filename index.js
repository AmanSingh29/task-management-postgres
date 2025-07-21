require("dotenv").config();
const express = require("express");
const { connectDB } = require("./config/db");
const userRoutes = require("./routes/users.rt");
const globalErrorHandlerMw = require("./middlewares/globalErrorHandler.mw.js");
const app = express();
const port = process.env.port;
app.use(express.json());

// DB Connection
connectDB();

// Models
require("./models/users.mo.js")

// Routes Definition
app.use("/v1/users", userRoutes);

app.use(globalErrorHandlerMw);

app.listen(port, () => {
    console.log(`Server Started At ${port}`)
})