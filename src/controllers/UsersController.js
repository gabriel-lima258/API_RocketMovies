const AppError = require("../utils/AppError");

class UsersController {
    /*
    - Boas práticas - máximo 5 funções em uma class
    * index - GET para listar vários registros;
    * show - GET para exibir um registro específico;
    * create - POST para criar um registro;
    * update - PUT para atualizar um registro;
    * delete - DELETE para deletar um registro.
    */

    create(request, response) {
        const { name, email, password } = request.body;

        if (!name) {
            throw new AppError("The name is necessary, please tell us your name!")
        }

        response.status(201).json({ name, email, password })
    }

}

module.exports = UsersController