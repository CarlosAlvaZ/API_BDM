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
            return Categoria.findByIdAndUpdate(
                id,
                { isDeleted: true },
                { new: true }
            )
        } catch (error) {
            return error
        }
    },
    // update: (id, prestamo) => {
    //     try {
    //         const filterId = mongoose.Types.ObjectId(id)
    //         console.log(filterId)
    //         return Element.findOneAndUpdate(
    //             { _id : filterId }, 
    //             { $addToSet : { prestamos : prestamo } },
    //             { new : true }
    //         )
    //     } catch (error) {
    //         return error
    //     }
    // }
}