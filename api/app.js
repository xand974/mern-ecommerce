require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000 || process.env.PORT;
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

app.use(cors());
app.use(helmet());
app.use(morgan("common"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
