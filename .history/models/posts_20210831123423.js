import mongoose from "mongoose"
const { Schema } = mongoose

const postSchema = new Schema({
     author: String,
     title: String,
     text: String,
     date: {
         type: Date, default: Date.now
     }
})

