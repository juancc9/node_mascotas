import express from 'express';
import {listarcategoriasJJM} from "../controllers/categoriaController_JJM.js"

const router = express.Router();
router.get("/categoriasJJM", listarcategoriasJJM)

export default router;
