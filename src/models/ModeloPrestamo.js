import mongoose, { Schema, model } from "mongoose";

const PrestamoSchema = new Schema({
    isbn : {
        type: String,
        required: true,
    },
    id_lector : {
        type: String,
        required : true
    },
    fecha_prestamo : {
        type : String,
        required : true
    },
    fecha_limite_devolucion: {
        type: String,
        required : true
    },
    fecha_devolucion: {
        type: String,
        required : false
    },
    devuelto : {
        type : Boolean,
        default : false
    }
}, { collection : "Prestamo" })

const Prestamo = model('prestamo', PrestamoSchema)

export default Prestamo