import { db } from "~/utils/db.server";
import { generateDatabase } from "./generate-database";

(async () => {
  try {
    console.log("Generating database");
    const data = await generateDatabase();
    console.log(data);
    await db.collection("algorithms").drop();
    await db.collection("algorithms").insertMany(data);
    console.log("Database generated");
    process.exit(0);
  } catch (err) {
    console.error("Failed to generate database", err);
    process.exit(0);
  }
})();
