const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload")

const UsersController = require("../controllers/UsersController");
const UsersAvatarController = require("../controllers/UserAvatarController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const usersController = new UsersController();
const userAvatarController = new UsersAvatarController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update); // caso já tenha cadastro, passa pela autenticação e depois a atualização
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update); // patch atualiza um campo especifíco, single = 1 arquivo

module.exports = usersRoutes; // exportando
