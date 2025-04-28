import express from "express";
import { listarUsuarioJJM, buscarUsuarioJJM, crearUsuarioJJM, editarUsuarioJJM, eliminarUsuarioJJM } from "../controllers/usuariosController_JJM.js";
 
const router  = express.Router()
router.get("/usuariosJJM", listarUsuarioJJM)
router.get("/usuariosJJM/:id", buscarUsuarioJJM)
router.post("/usuariosJJM", crearUsuarioJJM)
router.put("/usuariosJJM/:id", editarUsuarioJJM)
router.delete("/usuariosJJM/:id", eliminarUsuarioJJM)
export default router;