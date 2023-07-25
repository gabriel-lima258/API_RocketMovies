const { Router } = require("express");

const NotesController = require("../controllers/NotesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const notesRoutes = Router();

const notesController = new NotesController();

// Aplicando middleware para todas as rotas
notesRoutes.use(ensureAuthenticated);

notesRoutes.post("/", notesController.create); // criar
notesRoutes.get("/:id", notesController.show); // mostrar
notesRoutes.delete("/:id", notesController.delete); // deletar
notesRoutes.get("/", notesController.index); // listar

module.exports = notesRoutes; // exportando
