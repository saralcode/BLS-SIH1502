import mongoose from "mongoose";

export default async function connectMongo() {
  if (mongoose.connection.readyState !== mongoose.ConnectionStates.connected) {
    await mongoose.connect(process.env.MONGODB_URI as string, { dbName: "natureitems" });
  }
}

