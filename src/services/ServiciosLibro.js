import Libro  from '../models/ModeloLibro.js'

export const ServiciosLibro ={
    getAll :(options)=>{
        try{
            return Libro.find({...options})
        }catch(error){
            return error
        }
    },
    getOne:(id)=>{
        try{
          return Libro.find({_id: id})
        }catch(error){
            return error
        }
    },
    store:(newElement)=>{
        try{
            return Libro.create(newElement)
        }catch(error){
            return error
        }
    },
    delete:(id)=>{
        try{
            return Libro.findByIdAndDelete(id)
        }catch(error){
            return error
        }
    }
}