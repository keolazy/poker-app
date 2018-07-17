
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string('email')
    table.string('hashed_pw');
    table.string('first');
    table.string('last');
    table.string('phone');
    table.string('birthday');
    table.string('image');
    table.integer('points');
    table.integer('balance');
    table.integer('rsvps');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
