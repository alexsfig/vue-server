'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

      /*
      return queryInterface.bulkInsert('app_roles', [
        {
          name: 'Admin',
          description: 'Admin staff',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Manager',
          description: 'Manager staff',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Employee',
          description: 'Employee staff',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
      */
      return queryInterface.sequelize.query("SELECT * FROM app_roles");
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
      
      return queryInterface.bulkDelete('app_roles', null, {});
  }
};
