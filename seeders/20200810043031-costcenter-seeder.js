'use strict';
const fs = require('fs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let costcenters = await JSON.parse(fs.readFileSync(__dirname + '/../data/costcenters.json'));
    await queryInterface.bulkInsert('Costcenters', costcenters, {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Costcenters', null, {});

  }
};
