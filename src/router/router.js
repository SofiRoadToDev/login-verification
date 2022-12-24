const express=require('express');
const router=express.Router();
const hasher=require('../utils/bcrypt');
const {register}=require('../controllers/users-controller')

router.get('/',register);




module.exports=router;