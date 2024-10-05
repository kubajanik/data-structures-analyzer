import { MongoClient } from "mongodb"

import { generateDatabase } from "~/analyzer/generate-database"

const client = new MongoClient(process.env.DATABASE_URL ?? "")
client.connect().catch((err) => {
  console.error("Failed to connect to database", err)
})

export const db = client.db("main");

(async () => {
  try {
    console.log("Generating database")
    const data = await generateDatabase()
    await db.collection("algorithms").drop()
    await db.collection("algorithms").insertMany(data)
    console.log("Database generated")
  } catch (err) {
    console.error( "Failed to generate database", err)
    process.exit(0)
  }
})()

