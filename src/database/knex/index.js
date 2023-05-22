const config = require("../../../knexfile"); // importar as configurações knex
const knex = require("knex"); // importando knex

const connection = knex(config.development); // acessando as configurações de knex

module.exports = connection; // exportação de connection 