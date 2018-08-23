exports.up = function(knex, Promise) {
  return knex.schema.createTable("admins", table => {
    table.increments();
    table.string("email");
    table.string("hashed_pw");
    table.string("first");
    table.string("last");
    table.string("phone");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("admins");
};
