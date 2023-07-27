"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _promiseMysql = _interopRequireDefault(require("promise-mysql"));
var _config = _interopRequireDefault(require("../config/config"));
// const connection = mysql.createPool({
//     host: config.host,
//     database: config.database,
//     user: config.user,
//     password: config.password,
//     port: config.port,
// })

//* se crea la conexion a la base de datos
var connection = _promiseMysql["default"].createConnection({
  host: _config["default"].host,
  database: _config["default"].database,
  user: _config["default"].user,
  password: _config["default"].password,
  port: _config["default"].port
});

//* funcion que retorna la conexion
var getConnection = function getConnection() {
  return connection;
};
module.exports = {
  getConnection: getConnection
};