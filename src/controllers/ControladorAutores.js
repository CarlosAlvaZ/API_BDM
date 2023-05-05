import { ServiciosAutores } from '../services/ServiciosAutores.js'

const ControladorAuthor = {
    
    getAll: async (req, res) => {
        const allElements = await ServiciosAutores.getAll()
        return res.status(200).json({
            status : 200,
            total : allElements.length,
            data : allElements
        })
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const element = await ServiciosAutores.getOne(id)
        return res.status(200).json({
            status: 200,
            data: element,
        })
    },
    store: async (req, res) => {
        const newElement = {          
            nombre: req.body.nombre,
            apellido: req.body.apellido,
        }

        const elementStored = await ServiciosAutores.store(newElement)
        return res.status(200).json({
            data: elementStored
        })
    },
    delete: async (req, res) => {
        const { id } = req.params
        const response = await ServiciosAutores.delete(id)
        return res.status(200).json({
            status: 200,
            data: response
        })
    },
    update: async (req, res) => {
        const { id } = req.params
        const Libros = req.body.libros
        const response = await ServiciosAutores.update(id, Libros)
        return res.status(200).json({
            status: 200,
            data: response
        })
    }
}

export default ControladorAuthor