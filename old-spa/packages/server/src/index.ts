import express from "express"
import cors from "cors"

import { generateDatabase } from "./generate-database"

const server = express()

server.use(cors())

const algorithms = await generateDatabase()

server.get("/algorithm/:algorithm", (req, res) => {
  const algorithmData = algorithms.find(
    (algorithm) => algorithm.name === req.params.algorithm
  )

  if (!algorithmData) {
    res.sendStatus(404)
  }

  res.json(algorithmData)
})

server.get("/algorithms-list", (_req, res) => {
  const allAgorithms = algorithms.map(({ category, name }) => ({
    name,
    category,
  }))

  res.json(allAgorithms)
})

server.listen(8080, () => {
  console.log("Server listening on port 8080")
})
