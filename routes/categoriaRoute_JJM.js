import express from 'express';
import {listarCategoriaJJM, crearCategoriaJJM, editarCategoriaJJM, buscarCategoriaJJM, eliminarCategoriaJJM} from "../controllers/categoriaController_JJM.js"
import { validarToken } from '../controllers/autenticacionController_JJM.js';
const router = express.Router();
router.get("/categoriasJJM" , validarToken, listarCategoriaJJM);
router.post("/categoriasJJM", validarToken, crearCategoriaJJM);
router.get("/categoriasJJM/:id_categoria", validarToken, buscarCategoriaJJM);
router.put("/categoriasJJM/:id_categoria", validarToken, editarCategoriaJJM);
router.delete("/categoriasJJM/:id_categoria",validarToken, eliminarCategoriaJJM);
export default router;
