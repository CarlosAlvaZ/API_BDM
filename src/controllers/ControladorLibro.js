import { ServicioLibro } from "../services/ServiciosLibro.js"

const ControladorLibro = {
    getAll: async (req, res) => {
        const allElements = await ServicioLibro.getAll()
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
        return res.status(200).json({
            data: elementStored
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