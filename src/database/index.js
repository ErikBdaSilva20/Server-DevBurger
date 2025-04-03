import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import configDatabase from '../config/database.js';

import User from '../app/models/User.js';
import Product from '../app/models/Products.js';
import Category from '../app/models/Category.js';

const models = [User, Product, Category];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }
  init() {
    this.connection = new Sequelize(
      'postgresql://postgres:htHYQgVCQbEAPfSyzQTDtZzLCiKLYtNj@yamabiko.proxy.rlwy.net:35787/railway',
    );
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      );
  }
  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://mongo:apldqfbvPpTArMfyanFKszICBdzzTzSg@maglev.proxy.rlwy.net:39279',
    );
  }
}

export default new Database();
