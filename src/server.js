import express from "express";
import cors from "cors";
import upload from "./lib/uploadMulter.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/upload", upload.single("imagen"), async (req, res) => {
  try {
    // Enviar respuesta
    res.status(200).send({ ok: true, msg: "Imagen se subio correctamente" });
  } catch (error) {
    res
      .status(error.status || 400)
      .send({ ok: false, msg: error.message || "Unknown" });
  }
});

export default app;
