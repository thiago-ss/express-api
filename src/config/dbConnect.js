import mongoose from "mongoose";

mongoose.connect("mongodb+srv://thiago:123@cluster0.w1wdu.mongodb.net/express-api");

let db = mongoose.connection;

export default db;