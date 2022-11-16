import express from "express";
import colors from "colors";
import mongoose, { mongo } from "mongoose";
import elementRouter from "./routes/routes.js"


const port = process.env.PORT || 4000;

const app = express();

mongoose.connect(
    'mongodb+srv://carlosAlvarenga:readyPlayerOne@cluster0.hrrz7sv.mongodb.net/ProyectoSID?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(res => {
    console.log( colors.bgCyan("Conection succesfully made") )
}).catch(res => {
    console.log( colors.red( "Conection failed" ) )
})

app.use(express.json())

app.use("/lists", elementRouter);

app.listen(port, () => { console.log(colors.rainbow("Server running in port 3000")) });