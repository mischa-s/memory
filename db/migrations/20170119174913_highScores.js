
exports.up = function(knex, Promise) {
  return knex.schema.createTable('highScores', function (table) {
    table.increments();
    table.string('Name');
    table.integer('Score');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('highScores', function (table) {
  })
};
