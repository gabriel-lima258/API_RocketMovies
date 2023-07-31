class UserRepositoryInMemory {
    users = [];

    async create({name, email, password}) { // criando um objeto para banco de teste
        const user = {
            id: Math.floor(Math.random() * 1000) + 1,
            name,
            email,
            password
        };

        this.users.push(user); // this puxa o array users e insere dentro o user cadastrado

        return user;
    }

    async findByEmail(email) {
        return this.users.find(user => user.email === email); // filtrando o email cadastrado
    }
}

module.exports = UserRepositoryInMemory;