require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.USER_DB,
    "password": process.env.PASSWORD_DB,
    "database": "sequelize3",
    "host": process.env.HOST_DB,
    "dialect": "mysql"
  },
}
