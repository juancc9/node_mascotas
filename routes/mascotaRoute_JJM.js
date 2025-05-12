import express from "express"
import { listarMascota, buscarMascota, crearMascota, editarMascota, eliminarMascota, cargarImagen } from "../controllers/mascotaController_JJM.js"
const router = express.Router()
import { validarToken } from '../controllers/autenticacionController_JJM.js';

router.get("/mascotasJJM",validarToken, listarMascota)
router.post("/mascotasJJM", validarToken,cargarImagen, crearMascota,)
router.get("/mascotasJJM/:id_mascota",validarToken, buscarMascota)
router.put("/mascotasJJM/:id_mascota",validarToken, editarMascota)
router.delete("/mascotasJJM/:id_mascota",validarToken, eliminarMascota)

export default router;