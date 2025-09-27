import mongoose from "mongoose"

export const connectMongoDB = async () => {
    try {
        const cont = await mongoose.connect(process.env.MONGO_CONNECTION)
        console.log(`mongodb connected: ${cont.connection.host}`)
    } catch (error) {
        console.log(error)
        console.log("\nconnecting failure")
        process.exit(1)
    }
}