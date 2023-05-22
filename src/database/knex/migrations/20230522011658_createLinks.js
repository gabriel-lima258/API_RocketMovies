exports.up = knex => knex.schema.createTable("links", table => {
    table.increments("id");
    table.text("url").notNullable();
    
    table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE"); // referência ao id da tabela notes
    // onDelete serve para deletar as tags vinculadas ao note, caso seja deletada

    table.timestamp("created_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("links");
