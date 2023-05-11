import Categoria from "../models/ModeloCategoria.js"

export const ServiciosCategoria = {
    getAll: (options) => {
        try {
            return Categoria.find({...options})
        }
        catch(error) {
            return error
        }
    },
    getOne: (id) => {
        try {
            return Categoria.find({ _id: id })
        } catch (error) {
            return error
        }
    },
    store: (newElement) => {
        try {
            return Categoria.create(newElement)
        } catch (error){
            return error
        }
    },
    delete: (id) => {
        try {
            return Categoria.findByIdAndDelete(id)
        } catch (error) {
            return error
        }
    }
}