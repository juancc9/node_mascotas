import express from "express"
import { listarRaza,buscarRaza,editarRaza,crearRaza,eliminarRaza } from "../controllers/razaController_JJM.js"
import { validarToken } from '../controllers/autenticacionController_JJM.js';

const router = express.Router()

router.get("/razaJJM", validarToken, listarRaza)
router.get("/razaJJM/:id_raza",validarToken, buscarRaza)
router.post("/razaJJM", validarToken,crearRaza)
router.put("/razaJJM/:id_raza", validarToken, editarRaza)
router.delete("/razaJJM/:id_raza", validarToken, eliminarRaza)
export default router;
