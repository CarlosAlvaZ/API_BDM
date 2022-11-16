import { elementServices } from '../services/elementServices.js'

const elementController = {
    getAll: async (req, res) => {
        const allElements = await elementServices.getAll({ isDeleted: { $ne: true} })
        return res.status(200).json({
            status : 200,
            total : allElements.length,
            data : allElements
        })
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const element = await elementServices.getOne(id)
        return res.status(200).json({
            status: 200,
            data: element,
        })
    },
    store: async (req, res) => {
        const newElement = {
            nombre_lista: req.body.nombre_lista,
            color: req.body.color,
            elementos: req.body.elementos,
            descripcion: req.body.descripcion,
            isDeleted: false
        }

        const elementStored = await elementServices.store(newElement)
        return res.status(200).json({
            data: elementStored
        })
    },
    delete: async (req, res) => {
        const { id } = req.params
        const response = await elementServices.delete(id)
        return res.status(200).json({
            status: 200,
            data: response
        })
    },
    update: async (req, res) => {
        const { id } = req.params
        const elements = req.body.elementos
        const response = await elementServices.update(id, elements)
        return res.status(200).json({
            status: 200,
            data: response
        })
    }
}

export default elementController