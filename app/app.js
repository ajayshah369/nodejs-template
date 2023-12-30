const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

const globalErrorHandler = require("./globalErrorHandler");
const AppError = require("./utilities/appError");
const routes = require("./routes/routes");

const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use("/static", express.static(path.join(__dirname, "../public")));

app.use(
  cors({
    credentials: true,
    origin: JSON.parse(process.env.Origins)
  })
);

app.use(morgan("dev"));
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.Cookie_Secret, {}));

app.use("/api", routes);

app.use("*", (req, res, next) => {
  return next(new AppError("Not Found", 404));
});

app.use(globalErrorHandler);

module.exports = app;
