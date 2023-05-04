import { ServiciosPrestamo } from '../services/ServiciosPrestamo.js'

const ControladorPrestamo = {
    getAll: async (req, res) => {
        const allElements = await ServiciosPrestamo.getAll()
        return res.status(200).json({
            status : 200,
            total : allElements.length,
            data : allElements
        })
    },
    getOne: async (req, res) => {
        const { id } = req.params
        const element = await ServiciosPrestamo.getOne(id)
        return res.status(200).json({
            status: 200,
            data: element,
        })
    },
    store: async (req, res) => {
        const newElement = {
            isbn: req.body.isbn,
            id_lector: req.body.id_lector,
            fecha_prestamo: new Date(Date.now()).toISOString,
            fecha_limite_devolucion: new Date(Date.now()).setDate(Date.now() + 7),
        }

        const elementStored = await ServiciosPrestamo.store(newElement)
        return res.status(200).json({
            data: elementStored
        })
    },
    delete: async (req, res) => {
        const { id } = req.params
        const response = await ServiciosPrestamo.delete(id)
        return res.status(200).json({
            status: 200,
            data: response
        })
    },
    update: async (req, res) => {
        const { id } = req.params
        const prestamo = req.body.prestamos
        const response = await ServiciosPrestamo.update(id, prestamo)
        return res.status(200).json({
            status: 200,
            data: response
        })
    }
}

export default ControladorPrestamo