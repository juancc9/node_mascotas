import express from "express"
import { listarGenero, buscarGenero, crearGenero,editarGenero,eliminarGenero } from "../controllers/generoController_JJM.js"
const router = express.Router()
import { validarToken } from '../controllers/autenticacionController_JJM.js';

router.get("/generoJJM",validarToken, listarGenero)
router.post("/generoJJM",validarToken, crearGenero)
router.get("/generoJJM/:id_genero",validarToken, buscarGenero)
router.put("/generoJJM/:id_genero",validarToken, editarGenero)
router.delete("/generoJJM/:id_genero",validarToken, eliminarGenero)
export default router;
