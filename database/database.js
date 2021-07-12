const Sequelize = require("sequelize");


const connection = new Sequelize('myblog','root','ATX@12345',{
    host:'localhost',
    dialect:'mysql',
    timezone:"-03:00",
});

module.exports = connection;