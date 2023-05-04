import express from "express";
import mongoose from "mongoose";
import cors  from 'cors'
import elementRouter from "./routes/routes.js"
import * as dotenv from 'dotenv'

dotenv.config()


const port = process.env.PORT || 5000;

const app = express();

// Hola, yo del futuro. Solo paso a recordarte que si vas a usar una base Mongo local,
// pongás la ip (127.0.0.1:27017), no localhost:27017, para ahorrarte los 3 días que
// llevás buscando el error y era esa madre :')

mongoose.connect(
    process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(res => {
    console.log( "Conection succesfully made" )
}).catch(res => {
    console.log( "Conection failed", res )
})

app.use(express.json())
app.use(cors())
app.use("/api", elementRouter);

app.listen(port, () => { console.log(`Server running in port ${port}`) })

const hoy = Date.now()
const fecha = new Date(hoy)
console.log(fecha.toISOString())