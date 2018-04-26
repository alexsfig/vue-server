'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert('users', [{
        app_role_id: 1,
        username: 'jdoe',
        email: 'jdoe@foo.com',
        password: bcrypt.hashSync('123456', 10),
        pin: '0001',
        first_time: false,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
      return queryInterface.bulkDelete('users', null, {});
  }
};