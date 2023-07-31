const { hash, compare } = require("bcryptjs");
const AppError = require("../utils/AppError");

class UserCreateService {

    constructor(userRepository){
        this.userRepository = userRepository;
    }
    // o constructor é iniciado com uma classe global, e sempre que usar a classe usamos this
    
    async execute({name, email, password}){

        const checkUserExists = await this.userRepository.findByEmail(email);

        if (checkUserExists) {
            throw new AppError("Este usuário já existe!");
        }

        const hashedPassword = await hash(password, 8);

        await this.userRepository.create({name, email, password: hashedPassword});
    }
}

module.exports = UserCreateService;