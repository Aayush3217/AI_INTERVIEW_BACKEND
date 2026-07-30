import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();

const connectDb = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected")
    }catch(error){
        console.log(`Database Error ${error}`)
    }
}

export default connectDb;