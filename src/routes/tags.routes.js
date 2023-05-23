const { Router } = require("express");

const NotesController = require("../controllers/NotesController");

const notesRoutes = Router();

const notesController = new NotesController();

notesRoutes.get("/", notesController.index); // listar
notesRoutes.post("/:user_id", notesController.create); // criar
notesRoutes.get("/:id", notesController.show); // mostrar
notesRoutes.delete("/:id", notesController.delete); // deletar

module.exports = notesRoutes; // exportando
