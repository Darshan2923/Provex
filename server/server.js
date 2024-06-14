import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose, { mongo } from 'mongoose';

dotenv.config();

const app = express();

app.use(express.json());
app.disable('x-powered-by');

const corsConfig = {
    credentials: true,
    origin: true,
}
app.use(cors(corsConfig));
app.use(morgan("tiny"));

app.use((req, res, next, err) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
        success: false,
        status,
        message
    })
})

const port = process.env.PORT || 8700

const connect = () => {
    console.log("Mongo connected!!")
    // mongoose.set('strictQuery', true);
    // mongoose.connect(process.env.MONGO_URI)
    // .then(()=>console.log("Mongo connected successfully"))
    // .catch((err)=>console.log(err));
}

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    connect();
});