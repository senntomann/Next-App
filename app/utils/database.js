import mongoose from "mongoose";
const connectDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://sennto:Cocorabblt20@cluster0.i6tri.mongodb.net/nextAppDataBase?retryWrites=true&w=majority&appName=Cluster0")
        console.log("接続成功: MongoDBに接続します。")
    } catch {
        console.log("接続失敗: MongoDBに接続できません。")
        throw new Error()
    }
}
export default connectDB