import { Schema, model } from "mongoose";

const elementSchema = new Schema({
    nombre_lista : {
        type: String,
        required: true,
    },
    color : {
        type: Number,
        default: 1,
    },
    elementos: {
        type: Array,
    },
    descripcion: {
        type: String,
    },
    isDeleted: {
        type: Boolean,
    }
}, { collection : "wish_lists" })

const Element = model('element', elementSchema)

export default Element