import express from "express"
import cors from "cors"

import { debugAlgorithm } from "./debugger"
import { transformDebugResult } from "./utils"

const server = express()

server.use(cors())

server.get("/debug-algorithm/:algorithmName", async (req, res) => {
  const initialDebugResult = await debugAlgorithm(req.params.algorithmName)
  const debugResult = transformDebugResult(initialDebugResult)

  res.json(debugResult)
})

server.listen(8080, () => {
  console.log("Server listening on port 8080")
})
