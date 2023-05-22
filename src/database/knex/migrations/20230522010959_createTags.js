exports.up = knex => knex.schema.createTable("tags", table => {
    table.increments("id");
    table.text("name").notNullable();
    
    table.integer("user_id").references("id").inTable("users"); // referência ao id da tabela users
    table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE"); // referência ao id da tabela notes
    // onDelete serve para deletar as tags vinculadas ao note, caso seja deletada
});

exports.down = knex => knex.schema.dropTable("tags");
