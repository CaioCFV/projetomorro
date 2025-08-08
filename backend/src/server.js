const express = require("express");
const routes = require("./routes");
// const userRoutes = require("./userRoutes");
// const fileRoutes = require("./fileRoutes");
const bodyParser = require("body-parser");
// const cors = require("cors");
// const morgan = require("morgan");
const app = express();
require("./models");

// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(morgan("dev"));
// app.use("/arquivos", fileRoutes);
app.use("/api/", routes);
//app.use("/", userRoutes);
app.listen(process.env.PORT || 3000);
