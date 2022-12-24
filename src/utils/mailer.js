const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user:'sofi.workaffairs@gmail.com',
        pass:''
    }
});


var mailOptions = {
    from: ' ValSoft Sublimaciones',
    to:'clientemail',
    subject: 'Verificar mail para crear cuenta',
    text:'mail content'
}

const sendMail=(mailDestino,contenido)=>{
    return new Promise((resolve, reject)=>{
        transporter.sendMail(mailOptions,(err,info)=>{
            if(err){
                reject(err);
            }else{
                resolve(info);
            }
        })
    })
}

module.exports=sendMail;