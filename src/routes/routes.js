import { Router } from "express";
import ControladorLector from "../controllers/ControladorLector.js";
import ControladorPrestamo from "../controllers/ControladorPrestamo.js";
import ControladorEditorial from "../controllers/ControladorEditorial.js";
import ControladorCategoria from "../controllers/ControladorCategoria.js"
import ControladorAuthor from "../controllers/ControladorAutores.js";
import ControladorLibro from "../controllers/ControladorLibro.js";

const router = Router();

// Rutas Lectores
router.get("/lectores", ControladorLector.getAll);
router.get("/lectores/:id", ControladorLector.getOne)
router.post("/lectores", ControladorLector.store)
router.delete("/lectores/:id", ControladorLector.delete)
router.put("/lectores/:id", ControladorLector.update)

// Rutas Presatmo
router.get("/prestamos", ControladorPrestamo.getAll)
router.get("/prestamos/:id", ControladorPrestamo.getOne)
router.post("/prestamos", ControladorPrestamo.store)
router.delete("/prestamos/:id", ControladorPrestamo.delete)

// Rutas Editorial
router.get("/editoriales", ControladorEditorial.getAll)
router.get("/editoriales/:id", ControladorEditorial.getOne)
router.post("/editoriales", ControladorEditorial.store)
router.delete("/editoriales/:id", ControladorEditorial.delete)

// Rutas Categoria
router.get("/categorias", ControladorCategoria.getAll)
router.get("/categorias/:id", ControladorCategoria.getOne)
router.post("/categorias", ControladorCategoria.store)
router.delete("/categorias/:id", ControladorCategoria.delete)

// Rutas Autor
router.get("/autores", ControladorAuthor.getAll)
router.get("/autores/:id", ControladorAuthor.getOne)
router.post("/autores", ControladorAuthor.store)
router.delete("/autores/:id", ControladorAuthor.delete)
router.put("/autores/:id", ControladorAuthor.update)

// Rutas Libro
router.get("/libros", ControladorLibro.getAll)
router.get("/libros/:id", ControladorLibro.getOne)
router.post("/libros", ControladorLibro.store)
router.delete("/libros/:id", ControladorLibro.delete)

export default router;