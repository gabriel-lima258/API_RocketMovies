const knex = require("../database/knex"); // importando knex

class TagsController{
    async index(request, response){
        const user_id = request.user.id; // criando request por parâmetro

        const tags = await knex("tags") // acessando a tabela
        .where({ user_id }) // filtra a tabela tags onde tenha user_id

        return response.json(tags); // retorna resposta

    }
}

module.exports = TagsController;