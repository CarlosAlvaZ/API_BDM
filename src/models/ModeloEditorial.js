import mongoose, { Schema, model } from "mongoose";

const EditorialSchema = new Schema({
    nombre : {
        type: String,
        required : true
    },
    pais : {
        type : String,
        required : true
    }
}, { collection : "Editoriales" })

const Editorial = model('Editorial', EditorialSchema)

export default Editorial