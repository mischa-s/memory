
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('High Scores').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('High Scores').insert({id: 1, Name: 'Bill', Score: 15}),
        knex('High Scores').insert({id: 2, Name: 'Meghan', Score: 13}),
        knex('High Scores').insert({id: 3, Name: 'Alice', Score: 11}),
        knex('High Scores').insert({id: 4, Name: 'Rodrigo', Score: 12}),
        knex('High Scores').insert({id: 5, Name: 'Mischa', Score: 14})
      ]);
    });
};
