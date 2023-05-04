import { ServiciosLector } from '../services/ServiciosLector.js'

const ControladorLector = {
    getAll: async (req, res) => {
        const allElements = await ServiciosLector.getAll()
        return res.status(200).json({
            status : 200,
            total : allElements.length,
            data : allElements
        })
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const element = await ServiciosLector.getOne(id)
        return res.status(200).json({
            status: 200,
            data: element,
        })
    },
    store: async (req, res) => {
        const newElement = {
            id_lector: req.body.id_lector,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            prestamos: req.body.prestamos,
            fecha_nacimiento: req.body.fecha_nacimiento
        }

        const elementStored = await ServiciosLector.store(newElement)
        return res.status(200).json({
            data: elementStored
        })
    },
    delete: async (req, res) => {
        const { id } = req.params
        const response = await ServiciosLector.delete(id)
        return res.status(200).json({
            status: 200,
            data: response
        })
    },
    update: async (req, res) => {
        const { id } = req.params
        const prestamo = req.body.prestamos
        const response = await ServiciosLector.update(id, prestamo)
        return res.status(200).json({
            status: 200,
            data: response
        })
    }
}

export default ControladorLector