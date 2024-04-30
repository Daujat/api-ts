import express from "express";
import cors from "cors";

const port = process.env.PORT ?? 3000;
const app = express();

app.use(cors())

app.get("/", (req, res) => {
  res.send("Hellfsafa World");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port} `);
});
