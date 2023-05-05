import mongoose, { Schema, model } from "mongoose";

const CategoriaSchema = new Schema({
    nombre : {
        type: String,
        required : true
    },
    apto_menores : {
        type : Boolean,
        required : true
    }
}, { collection : "Categoria" })

const Categoria = model('Categoria', CategoriaSchema)

export default Categoria