
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('wizards').del()
    .then(function () {
      // Inserts seed entries
      return knex('wizards').insert([
        {name: 'Gandalf'},
        {name: 'Sauruman'},
        {name: 'Radagast'}
      ]);
    });
};
