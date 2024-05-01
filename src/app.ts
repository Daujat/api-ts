import express from "express";
import cors from "cors";
import { connectToDatabase } from "./config/mongo";
import userRoutes from "./modules/users";

const port = process.env.PORT ?? 3000;
const app = express();

app.use(cors());

app.use("/users", userRoutes);

connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Servidor escuchando en el puerto ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
    process.exit(1);
  });

app.get("/", (_, res) => {
  res.sendFile(process.cwd() + "/src/views/index.html");
});
