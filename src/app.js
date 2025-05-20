import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());


app.get("/", (req, res) => {
  res.send("Server is live ✅");
});


// Imported Route
import userRouter from "./route/user.route.js";
import jobRouter from "./route/job.route.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/jobs", jobRouter);

export { app };