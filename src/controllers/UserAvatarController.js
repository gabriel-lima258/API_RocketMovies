const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorage");

class UserAvatarController {
    async update(request, response) {
        const user_id = request.user.id; 
        const avatarFilename = request.file.filename;

        const diskStorage = new DiskStorage()

        const user = await knex("users")
        .where({id:user_id}).first(); // where, onde id seja igual um user_id específico

        if(!user) {
            throw new AppError('Somente o usuário autenticado pode mudar a foto de perfil!', 401);
        }

        if(user.avatar) {
            await diskStorage.deleteFile(user.avatar); // se existe uma imagem deletar ela
        }

        const filename = await diskStorage.saveFile(avatarFilename);
        user.avatar = filename; // caso não exista salvar a nova foto

        await knex("users").update(user).where({id:user_id}); // atualiza o banco de dados o avatar

        return response.json(user);
    }
}

module.exports = UserAvatarController;