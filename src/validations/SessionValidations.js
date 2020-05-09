const yup = require('yup');

class SessionValidations {
    async index(req,res,next){
        const schema = yup.object().shape({
            tipo: yup.string().require(),
        });

        if(!(await schema.isValid(req.body))) {
            return res.status(401).json({error: 'tipo não encontrado.'});
        }

        return next();
    }
}