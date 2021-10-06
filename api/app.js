require("dotenv").config();
require("sexy-require");
require("$config/db");
const express = require("express");
const app = express();
const port = 3001 || process.env.PORT;
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const orderRoutes = require("./routes/orders");
const productRoutes = require("./routes/products");
const cartRoutes = require("./routes/carts");

app.use(cors());
app.use(helmet());
app.use(morgan("common"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/orders", orderRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/carts", cartRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
