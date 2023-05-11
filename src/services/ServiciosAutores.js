import Autores from "../models/ModeloAutores.js"

export const ServiciosAutor = {
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
            return Autores.findByIdAndDelete(id)
        } catch (error) {
            return error
        }
    },
    update: (id, libro) => {
        try {
            return Autores.findByIdAndUpdate(id, { $addToSet : { libros : libro } }, { new : true })
        } catch (error) {
            return error
        }
    }
}
