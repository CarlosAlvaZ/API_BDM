import Element from "../models/model.js"

export const elementServices = {
    getAll: (options) => {
        try {
            return Element.find({...options})
        }
        catch(error) {
            return error
        }
    },
    getOne: (id) => {
        try {
            return Element.find({ _id: id })
        } catch (error) {
            return error
        }
    },
    store: (newElement) => {
        try {
            return Element.create(newElement)
        } catch (error){
            return error
        }
    },
    delete: (id) => {
        try {
            return Element.findByIdAndUpdate(
                id,
                { isDeleted: true },
                { new: true }
            )
        } catch (error) {
            return error
        }
    }
}
