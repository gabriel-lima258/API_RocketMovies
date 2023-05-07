const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();

function myMiddleWare(request, response, next) {
    console.log("Middleware rodando");

    if (!request.body.isAdmin) {
        return response.status(401).json({ message: "User Unauthorized" });
    }

    next();
    
}

const usersController = new UsersController();

usersRoutes.post("/", myMiddleWare, usersController.create);

module.exports = usersRoutes; // exportando
