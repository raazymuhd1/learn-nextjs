import mongoose from "mongoose"

const connectDb = async() => {
    try{
        await mongoose.connect(process.env.LOCAL_DB_URL,
             { useNewUrlParser: true }, console.log("database is connected"))

    } catch(err) {
        console.log(err)
    }
}

export default connectDb;