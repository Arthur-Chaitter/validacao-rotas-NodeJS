const express = require('express');

const adminRoutes = require('./routes/adminRoutes');
const publicRoutes = require("./routes/publicRoutes");
const userRoutes = require('./routes/userRoutes');


class App{
    constructor(){
        this.server = express();
        this.server.use(express.json());

        this.routes();
        this.protectedRoutes();
    }

    routes(){
        this.server.use(publicRoutes);
    }
    protectedRoutes(){
        this.server.use(adminRoutes);
        this.server.use(userRoutes);

    }
}

module.exports = new App().server;