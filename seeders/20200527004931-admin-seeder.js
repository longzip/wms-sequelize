'use strict';
const fs = require('fs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let result = null;
    let users = await JSON.parse(fs.readFileSync(__dirname + '/../data/users.json'));
    try {
      result = await queryInterface.bulkInsert('Users',users, {});
    } catch (error) {
      console.log(error)
    }
    return result
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});

  }
};