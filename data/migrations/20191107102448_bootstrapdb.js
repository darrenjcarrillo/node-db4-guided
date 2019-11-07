exports.up = function(knex) {
  return knex.schema
    .createTable("species", tbl => {
      // type is Primary key integer without negative values, also called unsigned.
      tbl.increments();

      tbl.string("name", 255).notNullable();
    })
    .createTable("animals", tbl => {
      tbl.increments();

      tbl.string("name", 255).notNullable();

      // define our Foreign Key
      tbl
        .integer("species_id")
        .unsigned()
        .references("id")
        .inTable("species")
        .onDelete("RESTRICT") // about deleting the record from the primary key tbl. could be 'RESTRICT', 'DO NOTHING', 'SET NULL'.
        .onUpdate("CASCADE"); // about changing the value of the primary key.

      // we have bears and a few animals that are bears.
    })
    .createTable("zoo", tbl => {
      tbl.increments();
      tbl.string("name", 255).notNullable;
      tbl.string("address", 255);
    })
    .createTable("zoo_animal", tbl => {
      tbl.increments();
      tbl.date("from", 255).notNullable;
      tbl.date("to", 255);
      tbl
        .integer("zoo_id")
        .unsigned()
        .notNullable();
      tbl
        .integer("animal_id")
        .unsigned()
        .notNullable();
    });
};

exports.down = function(knex) {};

// npx knex ...
// install knex global - npm i -g knex
