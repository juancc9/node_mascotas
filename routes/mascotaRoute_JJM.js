import express from "express"
import { listarMascota, buscarMascota, crearMascota, editarMascota, eliminarMascota, cargarImagen } from "../controllers/mascotaController_JJM.js"
const router = express.Router()

router.get("/mascotasJJM", listarMascota)
router.post("/mascotasJJM", cargarImagen, crearMascota,)
router.get("/mascotasJJM/:id_mascota", buscarMascota)
router.put("/mascotasJJM/:id_mascota", editarMascota)
router.delete("/mascotasJJM/:id_mascota", eliminarMascota)

export default router;