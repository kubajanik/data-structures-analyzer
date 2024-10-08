// import { generateDatabase } from "./analyzer/generate-database";
// import { db } from "./utils/db.server";

// (async () => {
//   try {
//     console.log("Generating database");
//     const data = await generateDatabase();
//     await db.collection("algorithms").drop();
//     await db.collection("algorithms").insertMany(data);
//     console.log("Database generated");
//   } catch (err) {
//     console.error("Failed to generate database", err);
//     process.exit(0);
//   }
// })();
