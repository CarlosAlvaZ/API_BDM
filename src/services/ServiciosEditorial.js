import Editorial from "../models/ModeloEditorial.js"

export const ServiciosEditorial = {
    getAll: (options) => {
        try {
            return Editorial.find({...options})
        }
        catch(error) {
            return error
        }
    },
    getOne: (id) => {
        try {
            return Editorial.find({ _id: id })
        } catch (error) {
            return error
        }
    },
    store: (newElement) => {
        try {
            return Editorial.create(newElement)
        } catch (error){
            return error
        }
    },
    delete: (id) => {
        try {
            return Editorial.findByIdAndDelete(id)
        } catch (error) {
            return error
        }
    },
}
