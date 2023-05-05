import mongoose,{Schema, model} from "mongoose"


const LibroSchema = new Schema ({
  isbn:{
     type: String,
     required: true
    },
    titulo:{
     type: String, 
     required: true 
    },
    autor:{
      type: String,
      required : true   
    },
    categoria:{
      type: String,
      required : true  
    },
    editorial:{
      type: String,
      required : true
    },
    idioma:{
      type: String,
      required: true
    }
},{ collection : "Libro" } )

const Libro = model('libro', LibroSchema)
export default Libro