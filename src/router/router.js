const express=require('express');
const router=express.Router();
const hasher=require('../utils/bcrypt');


router.get('/',(req,res) =>res.json({message:'Holis soy la api'}));

router.post('/register',async(req,res) =>{
    const {user,password,email}=req.body;
    const hashCode= await hasher.bcryptHash(password);
    
    
    //comprobar que ni usuario ni contraseña existan en BD
})




module.exports=router;