import express from "express";
import { cantidadMascotasPorEstado } from "../controllers/JJM_GraficasMascotas.js";

const router = express.Router();

router.get("/mascotaestadoJJM", cantidadMascotasPorEstado);

export default router;
