import express from "express"
import { listarRaza,buscarRaza,editarRaza,crearRaza,eliminarRaza } from "../controllers/razaController_JJM.js"

const router = express.Router()

router.get("/razaJJM",listarRaza)
router.get("/razaJJM/:id_raza", buscarRaza)
router.post("/razaJJM", crearRaza)
router.put("/razaJJM/:id_raza",editarRaza)
router.delete("/razaJJM/:id_raza",eliminarRaza)
export default router;
