import Lector from "../models/ModeloLector.js"

export const ServiciosLector = {
    getAll: (options) => {
        try {
            return Lector.find({...options})
        }
        catch(error) {
            return error
        }
    },
    getOne: (id) => {
        try {
            return Lector.find({ _id: id })
        } catch (error) {
            return error
        }
    },
    store: (newElement) => {
        try {
            return Lector.create(newElement)
        } catch (error){
            return error
        }
    },
    delete: (id) => {
        try {
            return Lector.findByIdAndUpdate(
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
    update: (id, prestamo) => {
        try {
            return Lector.findByIdAndUpdate(id, { $addToSet : { prestamos : prestamo } }, { new : true })
        } catch (error) {
            return error
        }
    }
}
