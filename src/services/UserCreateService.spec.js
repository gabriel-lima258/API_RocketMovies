const UserCreateService = require("./UserCreateService");
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory") // banco de dados para o teste

it("user should be create", async () => {
    const user = {
        name: "User test",
        email: "test@example.com",
        password: "123"
    }

    const userRepositoryInMemory = new UserRepositoryInMemory();
    const userCreateService = new UserCreateService(userRepositoryInMemory)
    const userCreated = await userCreateService.execute(user)

    expect(userCreated).toHaveProperty("id");
})