import express from 'express'
import { registrarCoordenadasJJM, listarCoordenadasJJM, buscarCoordenadasByIdJJM, actualizarCoordenadasJJM, eliminarCoordenadasJJM } from "../controllers/cordenadaController_JJM.js";
import { validarToken } from '../controllers/autenticacionController_JJM.js';
const router = express.Router();
router.put("/coordenadasJJM/:id_mascota", validarToken, actualizarCoordenadasJJM);
router.delete("/coordenadasJJM/:id_mascota", validarToken, eliminarCoordenadasJJM);
router.get("/coordenadasJJM/:id_mascota", validarToken, buscarCoordenadasByIdJJM);
router.post("/coordenadasJJM/",validarToken, registrarCoordenadasJJM);
router.get("/coordenadasJJM" ,validarToken, listarCoordenadasJJM);
export default router;