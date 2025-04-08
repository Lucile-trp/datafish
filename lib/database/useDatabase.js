import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";
let cached = global.mongoose;

if (!MONGODB_URI) {
  throw new Error(
    "Must define the MONGODB_URI environement variable inside .env file."
  );
}

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB(){
    if(cached.conn){
        return cached.conn;
    }


    if (!cached.promise) {
        const opts = {
          bufferCommands: false,
        };
    
        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
          return mongoose;
        });
      }
      cached.conn = await cached.promise;
      return cached.conn;
    }
    
    export default connectDB;