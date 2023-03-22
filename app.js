import createError from "http-errors";
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

const app = express();

// 引入路由
import index_category from "./routes/index_category.js";
import goods from "./routes/goods.js";
import category from "./routes/category.js";

// view engine setup
const __dirname = path.resolve();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/index_category", index_category);
app.use("/goods", goods);
app.use("/category", category);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

export default app;
