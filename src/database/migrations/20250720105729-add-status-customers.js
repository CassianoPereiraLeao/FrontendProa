'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.addColumn('customers', "status", {
        type: Sequelize.ENUM('ACTIVE', 'ARCHIVED'),
        allowNull: false,
        defaultValue: 'ACTIVE',
    });
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.removeColumn('customers', "status");
  }
};
