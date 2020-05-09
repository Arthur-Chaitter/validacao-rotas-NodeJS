const express = require('express');

const adminRoutes = require('./routes/adminRoutes');
const publicRoutes = require("./routes/publicRoutes");


class App{
    constructor(){
        this.server = express();
        this.server.use(express.json());

        this.routes();
        this.middlewares();
        this.protectedRoutes();
    }

    middlewares(){
        
    }

    routes(){
        this.server.use(publicRoutes);
    }
    protectedRoutes(){
        this.server.use(adminRoutes);

    }
}

module.exports = new App().server;