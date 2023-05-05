import Autores from "../models/ModeloAutores.js"

export const ServiciosPrestamo = {
    getAll: (options) => {
        try {
            return Autores.find({...options})
        }
        catch(error) {
            return error
        }
    },
    getOne: (id) => {
        try {
            return Autores.find({ _id: id })
        } catch (error) {
            return error
        }
    },
    store: (newElement) => {
        try {
            return Autores.create(newElement)
        } catch (error){
            return error
        }
    },
    delete: (id) => {
        try {
            return Autores.findByIdAndUpdate(
                id,
                { isDeleted: true },
                { new: true }
            )
        } catch (error) {
            return error
        }
    },
 /*   update: (id, devolucion) => {
        try {
            return Authores.findByIdAndUpdate(id, { fecha_devolucion : devolucion, devuelto : true}, { new : true })
        } catch (error) {
            return error
        }
    }*/
}
