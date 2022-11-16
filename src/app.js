import express from "express";
import colors from "colors";
import mongoose, { mongo } from "mongoose";
import cors  from 'cors'
import elementRouter from "./routes/routes.js"
import * as dotenv from 'dotenv'

dotenv.config()


const port = process.env.PORT || 4000;

const app = express();

mongoose.connect(
    process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(res => {
    console.log( colors.bgCyan("Conection succesfully made") )
}).catch(res => {
    console.log( colors.red( "Conection failed", res ) )
})

app.use(express.json())
app.use(cors())
app.use("/lists", elementRouter);

app.listen(port, () => { console.log(colors.rainbow(`Server running in port ${port}`)) });