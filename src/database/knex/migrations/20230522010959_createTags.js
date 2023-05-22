exports.up = knex => knex.schema.createTags("tags", table => {
    table.increments("id");
    table.text("name").notNullable();
    
    table.integer("user_id").references("id").inTable("users"); // referência ao id da tabela users
    table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE"); // referência ao id da tabela notes
    // onDelete serve para deletar as tags vinculadas ao note, caso seja deletada

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("tags");
