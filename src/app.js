
require('dotenv').config();
const express=require('express');
const app=express();
const morgan=require('morgan');
const cors=require('cors');
const mail=require('./utils/mailer')
const PORT=process.env.PORT || 8000;// esta tomando el segundo del or


mail('eet3107@gmail.com','mensaje de prueba')
    .then(response => console.log(response))
    .catch(err => console.log(err))


app.get("/",(req,res) => res.send('HOLA'));
morgan('dev');
app.use(cors());
app.use(express.json());
app.use('/api',require('./router/router'));



app.listen(PORT,()=>`Server running on: http://localhost:${PORT}/`);
