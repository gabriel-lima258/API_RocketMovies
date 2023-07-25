const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const {compare} = require("bcryptjs"); // compara uma senha criptografada
const authConfig = require("../configs/auth");
const {sign} = require("jsonwebtoken")

class SessionsController {
    async create(request, response){
        const {email, password} = request.body;

        const user = await knex("users").where({email}).first();

        if(!user){
            throw new AppError('Email ou senha incorreta', 401) // se o usuário não existe, aviso de erro, 401 código de erro
        }

        const passwordMatched = await compare(password, user.password); // comparo a senha digitada com a senha já cadastrada de usuário

        if(!passwordMatched){
            throw new AppError('Email ou senha incorreta', 401);
        }

        // importando o token

        const {secret, expiresIn} = authConfig.jwt;

        // criando o token, objeto vazio, palavra secreta e subject - conteúdo do token

        const token = sign({}, secret, {
            subject: String(user.id), // garante que seja passado como string
            expiresIn
        })

        return response.json({user, token});
    }
}

module.exports = SessionsController;