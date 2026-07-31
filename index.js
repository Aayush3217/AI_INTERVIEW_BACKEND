import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/connectdb.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.route.js";
import interviewRouter from "./routes/interview.route.js";
dotenv.config()

const app = express();
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://ai-interview-frontend-kappa.vercel.app"
    ],
    credentials:true
}))


app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/interview", interviewRouter);

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
    connectDb()
})