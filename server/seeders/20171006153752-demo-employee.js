'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

      return queryInterface.bulkInsert('employees', [{
        user_id: 1,
        first_name: 'John',
        last_name: 'Doe',
        ssn: '01234567891',
        phone_number: '1-800900700',
        birth_date: new Date('1987-06-01'),
        profile_picture: '',
        apply_incentives: true,
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
      return queryInterface.bulkDelete('employees', null, {});

  }
};