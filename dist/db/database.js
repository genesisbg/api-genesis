"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _promiseMysql = _interopRequireDefault(require("promise-mysql"));
var _config = _interopRequireDefault(require("../config/config"));
//* se crea la conexion a la base de datos
var connection = _promiseMysql["default"].createConnection({
  host: _config["default"].host,
  database: _config["default"].database,
  user: _config["default"].user,
  password: _config["default"].password
});

//* funcion que retorna la conexion
var getConnection = function getConnection() {
  return connection;
};
module.exports = {
  getConnection: getConnection
};