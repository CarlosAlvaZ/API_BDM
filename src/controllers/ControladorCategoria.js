import { ServiciosCategoria } from '../services/ServiciosCategoria.js'

const ControladorCategoria = {
    getAll: async (req, res) => {
        const allElements = await ServiciosCategoria.getAll()
        return res.status(200).json({
            status : 200,
            total : allElements.length,
            data : allElements
        })
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const element = await ServiciosCategoria.getOne(id)
        return res.status(200).json({
            status: 200,
            data: element,
        })
    },
    store: async (req, res) => {
        const newElement = {
            nombre: req.body.nombre,
            apto_menores: req.body.apto_menores,
        }

        const elementStored = await ServiciosCategoria.store(newElement)
        return res.status(200).json({
            data: elementStored
        })
    },
    delete: async (req, res) => {
        const { id } = req.params
        const response = await ServiciosCategoria.delete(id)
        return res.status(200).json({
            status: 200,
            data: response
        })
    }
    
}

export default ControladorCategoria