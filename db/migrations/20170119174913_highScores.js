
exports.up = function(knex, Promise) {
  return knex.schema.createTable('High Scores', function (table) {
    table.increments();
    table.string('Name');
    table.integer('Score');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('High Scores', function (table) {
  })
};
