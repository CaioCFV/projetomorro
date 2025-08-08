"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("student", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING(64),
        allowNull: false,
        unique: true,
      },
      phone: {
        type: Sequelize.STRING(64),
        allowNull: true,
        unique: true,
      },
      celphone: {
        type: Sequelize.STRING(64),
        unique: true,
        allowNull: true,
      },
      cep: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      renda_familiar: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("student");
  },
};
