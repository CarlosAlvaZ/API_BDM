import Prestamo from "../models/ModeloPrestamo.js"

export const ServiciosPrestamo = {
    getAll: (options) => {
        try {
            return Prestamo.find({...options})
        }
        catch(error) {
            return error
        }
    },
    getOne: (id) => {
        try {
            return Prestamo.find({ _id: id })
        } catch (error) {
            return error
        }
    },
    store: (newElement) => {
        try {
            return Prestamo.create(newElement)
        } catch (error){
            return error
        }
    },
    delete: (id) => {
        try {
            return Prestamo.findByIdAndUpdate(
                id,
                { isDeleted: true },
                { new: true }
            )
        } catch (error) {
            return error
        }
    },
    update: (id, devolucion) => {
        try {
            return Prestamo.findByIdAndUpdate(id, { fecha_devolucion : devolucion, devuelto : true}, { new : true })
        } catch (error) {
            return error
        }
    }
}
