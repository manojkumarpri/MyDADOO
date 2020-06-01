require('dotenv').config();


module.exports = {

  // If using onine database
  // development: {
  //   use_env_variable: 'DATABASE_URL'
  // },

  development: {
    database: 'Doordaa',
    username: 'postgres',
    password: 'manoj@11',
    host: '127.0.0.1',
    dialect: 'postgres',
    NODE_ENV:'development',
  },

  test: {
    database: 'testing_test',
    username: 'postgres',
    password: 'manoj@11',
    host: '127.0.0.1',
   dialect: 'postgres',
   NODE_ENV:'test',
  },

  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    NODE_ENV:'production',
  }
};