"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.methods = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../db/database");
// interacciones con la base de datos

//* GET
var getAuthors = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var connection, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _database.getConnection)();
        case 3:
          connection = _context.sent;
          _context.next = 6;
          return connection.query('CALL spGetAllAuthors()');
        case 6:
          result = _context.sent;
          // GET = SELECT

          res.json(result[0]);
          _context.next = 13;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          res.status(500).send(_context.t0.message);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function getAuthors(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getAuthor = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, connection, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          id = req.params.id;
          _context2.next = 4;
          return (0, _database.getConnection)();
        case 4:
          connection = _context2.sent;
          _context2.next = 7;
          return connection.query("CALL spGetAuthor(".concat(id, ")"));
        case 7:
          result = _context2.sent;
          if (!(result[0][0] === undefined)) {
            _context2.next = 10;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            message: "El autor ingresado no existe"
          }));
        case 10:
          res.json(result[0]);
          _context2.next = 16;
          break;
        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](0);
          res.status(500).send(_context2.t0.message);
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 13]]);
  }));
  return function getAuthor(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

//* POST
var addAuthor = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, NOM_AUTOR, FECHA_NACIMIENTO, LUGAR_NACIMIENTO, FECHA_MUERTE, OCUPACIONES, MOVIMIENTO_LITERARIO, Author, connection;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$body = req.body, NOM_AUTOR = _req$body.NOM_AUTOR, FECHA_NACIMIENTO = _req$body.FECHA_NACIMIENTO, LUGAR_NACIMIENTO = _req$body.LUGAR_NACIMIENTO, FECHA_MUERTE = _req$body.FECHA_MUERTE, OCUPACIONES = _req$body.OCUPACIONES, MOVIMIENTO_LITERARIO = _req$body.MOVIMIENTO_LITERARIO;
          Author = {
            NOM_AUTOR: NOM_AUTOR,
            FECHA_NACIMIENTO: FECHA_NACIMIENTO,
            LUGAR_NACIMIENTO: LUGAR_NACIMIENTO,
            FECHA_MUERTE: FECHA_MUERTE,
            OCUPACIONES: OCUPACIONES,
            MOVIMIENTO_LITERARIO: MOVIMIENTO_LITERARIO
          }; // Valida si los campos de la peticion están llenos o no
          if (!(NOM_AUTOR === undefined)) {
            _context3.next = 5;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: "Por favor ingrese el NOMBRE del autor"
          }));
        case 5:
          if (!(FECHA_NACIMIENTO === undefined)) {
            _context3.next = 7;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: "Por favor ingrese la FECHA DE NACIMIENTO del autor"
          }));
        case 7:
          if (!(LUGAR_NACIMIENTO === undefined)) {
            _context3.next = 9;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: "Por favor ingrese el LUGAR DE NACIMIENTO del autor"
          }));
        case 9:
          if (!(FECHA_MUERTE === undefined)) {
            _context3.next = 11;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: "Por favor ingrese la FECHA DE MUERTE del autor"
          }));
        case 11:
          if (!(OCUPACIONES === undefined)) {
            _context3.next = 13;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: "Por favor ingrese las OCUPACIONES del autor"
          }));
        case 13:
          if (!(MOVIMIENTO_LITERARIO === undefined)) {
            _context3.next = 15;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: "Por favor ingrese el MOVIMIENTO LITERARIO del autor"
          }));
        case 15:
          _context3.next = 17;
          return (0, _database.getConnection)();
        case 17:
          connection = _context3.sent;
          _context3.next = 20;
          return connection.query("CALL spAddAuthor('".concat(Author.NOM_AUTOR, "', '").concat(Author.FECHA_NACIMIENTO, "', '").concat(Author.LUGAR_NACIMIENTO, "', '").concat(Author.FECHA_MUERTE, "', '").concat(Author.OCUPACIONES, "', '").concat(Author.MOVIMIENTO_LITERARIO, "')"));
        case 20:
          res.status(201).json({
            message: "Autor añadido"
          });
          _context3.next = 30;
          break;
        case 23:
          _context3.prev = 23;
          _context3.t0 = _context3["catch"](0);
          _context3.t1 = _context3.t0.errno;
          _context3.next = _context3.t1 === 1062 ? 28 : 29;
          break;
        case 28:
          return _context3.abrupt("return", res.status(400).json({
            message: "El autor ingresado ya existe"
          }));
        case 29:
          return _context3.abrupt("return", res.status(500).send(_context3.t0.message));
        case 30:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 23]]);
  }));
  return function addAuthor(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

//* DELETE
var deleteAuthor = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, connection, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return (0, _database.getConnection)();
        case 4:
          connection = _context4.sent;
          _context4.next = 7;
          return connection.query("CALL spDeleteAuthor(".concat(id, ")"));
        case 7:
          result = _context4.sent;
          _context4.t0 = result.affectedRows;
          _context4.next = _context4.t0 === 0 ? 11 : _context4.t0 === 1 ? 12 : 13;
          break;
        case 11:
          return _context4.abrupt("return", res.status(400).json({
            message: "El autor ingresado no existe"
          }));
        case 12:
          return _context4.abrupt("return", res.status(202).json({
            message: "Autor eliminado"
          }));
        case 13:
          return _context4.abrupt("return", res.status(404).json({
            message: "Error, intentelo nuevamente mas tarde"
          }));
        case 14:
          _context4.next = 19;
          break;
        case 16:
          _context4.prev = 16;
          _context4.t1 = _context4["catch"](0);
          res.status(500).send(_context4.t1.message);
        case 19:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 16]]);
  }));
  return function deleteAuthor(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

//* PUT
var updateAuthor = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, _req$body2, NOM_AUTOR, FECHA_NACIMIENTO, LUGAR_NACIMIENTO, FECHA_MUERTE, OCUPACIONES, MOVIMIENTO_LITERARIO, Author, connection, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          _req$body2 = req.body, NOM_AUTOR = _req$body2.NOM_AUTOR, FECHA_NACIMIENTO = _req$body2.FECHA_NACIMIENTO, LUGAR_NACIMIENTO = _req$body2.LUGAR_NACIMIENTO, FECHA_MUERTE = _req$body2.FECHA_MUERTE, OCUPACIONES = _req$body2.OCUPACIONES, MOVIMIENTO_LITERARIO = _req$body2.MOVIMIENTO_LITERARIO;
          Author = {
            NOM_AUTOR: NOM_AUTOR,
            FECHA_NACIMIENTO: FECHA_NACIMIENTO,
            LUGAR_NACIMIENTO: LUGAR_NACIMIENTO,
            FECHA_MUERTE: FECHA_MUERTE,
            OCUPACIONES: OCUPACIONES,
            MOVIMIENTO_LITERARIO: MOVIMIENTO_LITERARIO
          }; // Valida si los campos de la peticion están llenos o no
          if (!(NOM_AUTOR === undefined)) {
            _context5.next = 6;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            message: "Por favor ingrese el NOMBRE del autor"
          }));
        case 6:
          if (!(FECHA_NACIMIENTO === undefined)) {
            _context5.next = 8;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            message: "Por favor ingrese la FECHA DE NACIMIENTO del autor"
          }));
        case 8:
          if (!(LUGAR_NACIMIENTO === undefined)) {
            _context5.next = 10;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            message: "Por favor ingrese el LUGAR DE NACIMIENTO del autor"
          }));
        case 10:
          if (!(FECHA_MUERTE === undefined)) {
            _context5.next = 12;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            message: "Por favor ingrese la FECHA DE MUERTE del autor"
          }));
        case 12:
          if (!(OCUPACIONES === undefined)) {
            _context5.next = 14;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            message: "Por favor ingrese las OCUPACIONES del autor"
          }));
        case 14:
          if (!(MOVIMIENTO_LITERARIO === undefined)) {
            _context5.next = 16;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            message: "Por favor ingrese el MOVIMIENTO LITERARIO del autor"
          }));
        case 16:
          _context5.next = 18;
          return (0, _database.getConnection)();
        case 18:
          connection = _context5.sent;
          _context5.next = 21;
          return connection.query("CALL spUpdateAuthor(".concat(id, ", '").concat(Author.NOM_AUTOR, "', '").concat(Author.FECHA_NACIMIENTO, "', '").concat(Author.LUGAR_NACIMIENTO, "', '").concat(Author.FECHA_MUERTE, "', '").concat(Author.OCUPACIONES, "', '").concat(Author.MOVIMIENTO_LITERARIO, "')"));
        case 21:
          result = _context5.sent;
          _context5.t0 = result.affectedRows;
          _context5.next = _context5.t0 === 0 ? 25 : _context5.t0 === 1 ? 26 : 27;
          break;
        case 25:
          return _context5.abrupt("return", res.status(400).json({
            message: "El autor ingresado no existe"
          }));
        case 26:
          return _context5.abrupt("return", res.status(202).json({
            message: "Datos del autor actualizados"
          }));
        case 27:
          return _context5.abrupt("return", res.status(404).json({
            message: "Error, intentelo nuevamente mas tarde"
          }));
        case 28:
          _context5.next = 37;
          break;
        case 30:
          _context5.prev = 30;
          _context5.t1 = _context5["catch"](0);
          _context5.t2 = _context5.t1.errno;
          _context5.next = _context5.t2 === 1062 ? 35 : 36;
          break;
        case 35:
          return _context5.abrupt("return", res.status(400).json({
            message: "El autor ingresado ya existe"
          }));
        case 36:
          return _context5.abrupt("return", res.status(500).send(_context5.t1.message));
        case 37:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 30]]);
  }));
  return function updateAuthor(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var methods = {
  getAuthors: getAuthors,
  getAuthor: getAuthor,
  addAuthor: addAuthor,
  deleteAuthor: deleteAuthor,
  updateAuthor: updateAuthor
};
exports.methods = methods;