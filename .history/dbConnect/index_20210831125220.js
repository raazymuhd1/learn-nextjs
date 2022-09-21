import mongoose from "mongoose"

const connectDb = async() => {
    try{
        await mongoose.connect(process.env.MONGO_DB_URL, {
            useNewUrlParser: true, useUnifiedTopology: true
        })

        console.log("database is connected")
    } catch(err) {
        console.log(err)
    }
}

export default connectDb;