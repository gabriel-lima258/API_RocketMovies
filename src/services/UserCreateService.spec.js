const UserCreateService = require("./UserCreateService");
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory"); // banco de dados para o teste
const AppError = require("../utils/AppError");

describe("UserCreateService", () => {
    // Reaproveitando o código com beforeEach

    let userRepositoryInMemory = null;
    let userCreateService = null;

    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        userCreateService = new UserCreateService(userRepositoryInMemory);
    });

    it("user should be create", async () => {
        const user = {
            name: "User test",
            email: "test@example.com",
            password: "123"
        }
    
        const userCreated = await userCreateService.execute(user)
    
        expect(userCreated).toHaveProperty("id");
    });

    it("user should not be create with exists email", async () => {
        const user1 = {
            name: "User test 1",
            email: "test@example.com",
            password: "123"
        };

        const user2 = {
            name: "User test 2",
            email: "test@example.com",
            password: "456"
        };

        await userCreateService.execute(user1);
        await expect(userCreateService.execute(user2)).rejects.toEqual(new AppError("Este e-mail já está em uso!"))
    })
});
