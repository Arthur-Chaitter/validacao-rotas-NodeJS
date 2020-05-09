const express = require('express');

const adminRoutes = require('./routes/adminRoutes');


class App{
    constructor(){
        this.server = express();

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(express.json());
    }

    routes(){
        this.server.use(adminRoutes);

    }
}

module.exports = new App().server;