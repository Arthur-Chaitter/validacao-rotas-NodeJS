const yup = require('yup');
const Joi = require('@hapi/joi');

// class SessionValidations {
//     async index(req,res,next){
//         const schema = yup.object().shape({
//             tipo: yup.string().require(),
//         });
//         console.log("entrou na validacao do yup");

//         if(!(await schema.isValid(req.body))) {
//             return res.status(401).json({error: 'tipo não encontrado.'});
//         }

//         return next();
//     }
// }

class SessionValidations {
    async index(req,res,next) {
        const schema = Joi.object({
            tipo: Joi.string().required(),
        });

        const value = await schema.validate(req.body);
        
        if(value.error){
            res.status(401).json({error: 'tipo não encontrado'});
        }else{
            return next();
        }
        

    }
}

module.exports = new SessionValidations();