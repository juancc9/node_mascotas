import express from "express"
import { listarGenero, buscarGenero, crearGenero,editarGenero,eliminarGenero } from "../controllers/generoController_JJM.js"
const router = express.Router()

router.get("/generoJJM", listarGenero)
router.post("/generoJJM", crearGenero)
router.get("/generoJJM/:id_genero", buscarGenero)
router.put("/generoJJM/:id_genero", editarGenero)
router.delete("/generoJJM/:id_genero", eliminarGenero)
export default router;
