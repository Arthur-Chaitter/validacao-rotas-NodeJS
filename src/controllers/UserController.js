class UserController{
    index(req,res) {
        let { tipo } = req.body;

        if(tipo == "user"){
            return res.status(200).json({ok: 'bem vindo user'});
        }else{
            res.status(401).json({error: 'Você não é um usuario, tipo não encontrado.'})
        }
    }
}

module.exports = new UserController();