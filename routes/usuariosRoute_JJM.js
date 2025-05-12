import express from "express";
import { listarUsuarioJJM, buscarUsuarioJJM, crearUsuarioJJM, editarUsuarioJJM, eliminarUsuarioJJM } from "../controllers/usuariosController_JJM.js";
import { validarToken } from "../controllers/autenticacionController_JJM.js";
 
const router  = express.Router()
router.get("/usuariosJJM",validarToken, listarUsuarioJJM)
router.get("/usuariosJJM/:id",validarToken, buscarUsuarioJJM)
router.post("/usuariosJJM",  crearUsuarioJJM)
router.put("/usuariosJJM/:id",validarToken,  editarUsuarioJJM)
router.delete("/usuariosJJM/:id",validarToken, eliminarUsuarioJJM)
export default router;