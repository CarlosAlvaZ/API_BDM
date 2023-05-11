import { ServiciosEditorial } from '../services/ServiciosEditorial.js'

const ControladorEditorial = {
    getAll: async (req, res) => {
        const allElements = await ServiciosEditorial.getAll()
        return res.status(200).json({
            status : 200,
            total : allElements.length,
            data : allElements
        })
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const element = await ServiciosEditorial.getOne(id)
        return res.status(200).json({
            status: 200,
            data: element,
        })
    },
    store: async (req, res) => {
        const newElement = {
            nombre: req.body.nombre,
            pais: req.body.pais,
        }

        const elementStored = await ServiciosEditorial.store(newElement)
        return res.status(200).json({
            data: elementStored
        })
    },
    delete: async (req, res) => {
        const { id } = req.params
        const response = await ServiciosEditorial.delete(id)
        return res.status(200).json({
            status: 200,
            data: response
        })
    }
    
}

export default ControladorEditorial