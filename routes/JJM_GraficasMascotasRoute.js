import express from "express";
import { cantidadMascotasPorEstado } from "../controllers/JJM_GraficasMascotas.js";
import { obtenerMascotasPorRaza } from "../controllers/JJM_GraficasMascotas.js";
const router = express.Router();

router.get("/mascotaestadoJJM", cantidadMascotasPorEstado);
router.get("/mascotasRazaJJM", obtenerMascotasPorRaza);

export default router;

