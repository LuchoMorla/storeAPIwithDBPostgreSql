'use strict';

const { CategorySchema, CATEGORY_TABLE } = require('../../db/models/categoryModel');
const { ProductSchema, PRODUCT_TABLE } = require('../models/productModel');

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
   await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.dropTable(PRODUCT_TABLE, ProductSchema);
  }
};