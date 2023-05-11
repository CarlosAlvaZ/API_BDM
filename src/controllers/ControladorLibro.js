import { ServiciosLibro } from "../services/ServiciosLibro.js"
import { ServiciosAutor } from "../services/ServiciosAutores.js"

const ControladorLibro = {
    getAll: async (req, res) => {
        const allElements = await ServiciosLibro.getAll()
        return res.status(200).json({
            status : 200,
            total : allElements.length,
            data : allElements
        })
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const element = await ServiciosLibro.getOne(id)
        return res.status(200).json({
            status: 200,
            data: element,
        })
    },
    store: async (req, res) => {
        const newElement = {
            isbn: req.body.isbn,
            titulo: req.body.titulo,
            autor: req.body.autor,
            categoria: req.body.categoria,
            editorial: req.body.editorial,
            idioma: req.body.idioma
        }

        const elementStored = await ServiciosLibro.store(newElement)
        const idLibro = elementStored._id.toString()
        const updatedAutor = await ServiciosAutor.update(req.body.autor, idLibro)
        return res.status(200).json({
            data: elementStored,
            autor : updatedAutor
        })
    },
    delete: async (req, res) => {
        const { id } = req.params
        const response = await ServiciosLibro.delete(id)
        return res.status(200).json({
            status: 200,
            data: response
        })
    },
    /**Pendiente Updated pregunta para Benja */
}

export default ControladorLibro