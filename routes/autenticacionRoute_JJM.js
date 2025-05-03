import express, { Router } from "express"

import { creartoken, validarToken } from "../controllers/autenticacionController_JJM.js"
const router = express.Router()
router.get("/loginJJM", creartoken);
router.post("/loginJJM", validarToken);
export default router;