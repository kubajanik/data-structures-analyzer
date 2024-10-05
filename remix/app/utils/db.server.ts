import { MongoClient } from "mongodb"

import { generateDatabase } from "../analyzer/generate-database"

const client = new MongoClient(process.env.DATABASE_URL ?? "")
await client.connect().catch((err) => {
  console.error("Failed to connect to database", err)
})

export const db = client.db("main")

try {
  const data = await generateDatabase()
  await db.collection("algorithms").drop()
  await db.collection("algorithms").insertMany(data)
} catch (err) {
  console.error(err)
}
