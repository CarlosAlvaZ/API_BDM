import mongoose, { Schema, model } from "mongoose";

const AutorSchema = new Schema({
    nombre : {
        type: String,
        required : true
    },
    apellido : {
        type : String,
        required : true
    },
    libros: {
        type: Array,
        default : []
    },
    
}, { collection : "Autores" })

const Autor = model('Autor', AutorSchema)

export default Autor