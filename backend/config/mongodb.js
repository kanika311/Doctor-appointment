import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => console.log("✅ Database Connected"));

    const uri = `${process.env.MONGO_URI}`; // 👈 Correct variable name
    await mongoose.connect(uri);
  } catch (error) {
    console.error("❌ Database connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
