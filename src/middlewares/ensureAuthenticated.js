const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const authConfig = require("../configs/auth");

function ensureAuthenticated(request, response, next){
    // criando uma váriavel para guardar o token
    const authHeader = request.headers.authorization;
    // se não existir o token do id de usuário
    if(!authHeader){
        throw new AppError("JWT Token não informado", 401);
    }
    // caso exista, pegamos o token como string e separamos cada letra com split dentro do vetor
    const [, token] = authHeader.split(" ");

    // verifica o token com a chave se ele é válido, pegamos o conteúdo do sub e transforma em id

    try {
       const {sub:user_id} = verify(token, authConfig.jwt.secret);
       // o token era string e transforma ele para número novamente dentro do banco
       request.user = {
        id: Number(user_id)
       }
       // chama a próxima função middleware next()
       return next()

    } catch {
       throw new AppError("JWT Token inválido", 401); // caso dê erro
    }
}

module.exports = ensureAuthenticated;