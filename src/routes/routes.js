import { Router } from "express";
import ControladorLector from "../controllers/ControladorLector.js";
import ControladorPrestamo from "../controllers/ControladorPrestamo.js";

const router = Router();

// Rutas Lectores
router.get("/lectores", ControladorLector.getAll);
router.get("/lectores/:id", ControladorLector.getOne)
router.post("/lectores", ControladorLector.store)
router.delete("/lectores/:id", ControladorLector.delete)
router.put("/lectores/:id", ControladorLector.update)

// Rutas Presatmo
router.get("/prestamos", ControladorPrestamo.getAll)
// router.get("/prestamos/:id", ControladorPrestamo.getOne)
router.post("/prestamos", ControladorPrestamo.store)

export default router;