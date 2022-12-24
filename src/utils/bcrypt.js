const bcrypt = require('bcryptjs');
const rondasSal=10;

const bcryptHash=(word)=>{
    return new Promise((resolve, reject)=>{
        bcrypt.hash(word,rondasSal,(err,hashedWord)=>{
            if(err){
                reject(err);
            }else{
                resolve(hashedWord);
            }
        });
    })

}

const verifyHash=(word,hashedWord) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(word,hashedWord,(err,succeed) => {
            if(err) {
                reject(err);
            }else{
                resolve(succeed);
            }
        });
    })
}

module.exports ={
    bcryptHash,
    verifyHash
}




