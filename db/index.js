module.exports = function (knex) {

  return {
    find: function (table, options) {
      return knex(table).select()
    },

    addName: function (table, name) {
      return knex(table).insert(name)
        .then(() => {
          return knex(table).select()
        })
    }
  }
}
