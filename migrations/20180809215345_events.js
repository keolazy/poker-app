exports.up = function(knex, Promise) {
  return knex.schema.createTable("events", table => {
    table.increments();
    table.string("name");
    table.string("description");
    table.string("location");
    table.string("date");
    table.string("start_time");
    table.string("end_time");
    table.integer("host_id");
    table
      .foreign("host_id")
      .references("users.id")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("events");
};
