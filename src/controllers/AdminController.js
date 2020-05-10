class AdminController{
    index(req,res) {
        let { tipo } = req.body;
        if(tipo == "Admin"){
            return res.status(200).json({ ok: 'bem vindo admin' });
        }
        else{
            res.status(401).json({error: 'Voce não é Admin, tipo incorreto'});
        }
    }
}

module.exports = new AdminController();