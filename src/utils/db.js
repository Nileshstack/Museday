const { default: mongoose } = require("mongoose")


const connect = async()=>{
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("Mongo DB connected")
    } catch (error) {
       console.error(" MongoDB connection error:", error); 
    throw new Error("MongoDB connection failed: " + error.message);
    }
}
export default connect;