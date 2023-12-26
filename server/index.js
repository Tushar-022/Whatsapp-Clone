import express from 'express'
import cors from 'cors'
import Connection from './database/db.js';
import Route from './routes/route.js';
import bodyParser from 'body-parser';

const app=express()

app.use(cors());

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/',Route)


Connection();
const port=8000;
app.listen(port,()=>console.log(`server is running on port ${port}`));