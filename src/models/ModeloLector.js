import mongoose, { Schema, model } from "mongoose";

const LectorSchema = new Schema({
    _id : {
        type : mongoose.Types.ObjectId,
        required : false
    },
    id_lector : {
        type: String,
        required: true,
    },
    nombre : {
        type: String,
        required : true
    },
    apellido : {
        type : String,
        required : true
    },
    prestamos: {
        type: Array,
        default : []
    },
    fecha_nacimiento: {
        type: String,
        required : true
    }
}, { collection : "Lectores" })

const Lector = model('lector', LectorSchema)

export default Lector