const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const adminToken = require('../config/adminToken');

module.exports = async (req,res,next) =>{
    try{
        const authHeader = req.headers.authorization;
        if(!authHeader){
            return res.status(401).json({error: 'Token do Admin não encontrado.'});
        }

        const [, token] = authHeader.split(' ');

        await promisify(jwt.verify)(token, adminToken.secret);

        return next();
    } catch(error){
        //se for
        return res.status(401).json({error: 'Erro adminAlth' });
    }
};