import { ServiciosAutor } from '../services/ServiciosAutores.js'

const ControladorAuthor = {
    
    getAll: async (req, res) => {
        const allElements = await ServiciosAutor.getAll()
        return res.status(200).json({
            status : 200,
            total : allElements.length,
            data : allElements
        })
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const element = await ServiciosAutor.getOne(id)
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

        const elementStored = await ServiciosAutor.store(newElement)
        return res.status(200).json({
            data: elementStored
        })
    },
    delete: async (req, res) => {
        const { id } = req.params
        const response = await ServiciosAutor.delete(id)
        return res.status(200).json({
            status: 200,
            data: response
        })
    },
    update: async (req, res) => {
        const { id } = req.params
        const libro = req.body.libros
        const response = await ServiciosAutor.update(id, libro)
        return res.status(200).json({
            status: 200,
            data: response
        })
    }
}

export default ControladorAuthor