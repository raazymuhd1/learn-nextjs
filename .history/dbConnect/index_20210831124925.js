import mongoose from "mongoose"

const connectDb = async() => {
    try{
        const connect = mongoose.connect(process.env.MONGO_DB_URL, {
            
        })
    }
}