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
var getGenres = /*#__PURE__*/function () {
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
          return connection.query('CALL `spGetAllGenre`()');
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
  return function getGenres(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getGenre = /*#__PURE__*/function () {
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
          return connection.query('CALL `spGetGenre`(?)', id);
        case 7:
          result = _context2.sent;
          if (!(result[0][0] === undefined)) {
            _context2.next = 10;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            message: "Genero no encotrado. Intenta de nuevo"
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
  return function getGenre(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

//* POST
var addGenre = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var NOMBRE, Genre, connection;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          NOMBRE = req.body.NOMBRE;
          Genre = {
            NOMBRE: NOMBRE
          };
          _context3.next = 5;
          return (0, _database.getConnection)();
        case 5:
          connection = _context3.sent;
          _context3.next = 8;
          return connection.query("CALL spAddGenre('".concat(Genre.NOMBRE, "');"));
        case 8:
          if (!(NOMBRE === undefined)) {
            _context3.next = 10;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            message: "Escriba el nombre del GENERO."
          }));
        case 10:
          res.status(201).json({
            message: "Genero AGREGADO"
          });
          _context3.next = 21;
          break;
        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](0);
          _context3.t1 = _context3.t0.errno;
          _context3.next = _context3.t1 === 1062 ? 18 : _context3.t1 === 1060 ? 19 : 20;
          break;
        case 18:
          return _context3.abrupt("return", res.status(404).json({
            message: "Genero ya ha sido agregado."
          }));
        case 19:
          return _context3.abrupt("return", res.status(404).json({
            message: "Genero ya ha sido agregado."
          }));
        case 20:
          res.status(500).send(_context3.t0.message);
        case 21:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 13]]);
  }));
  return function addGenre(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

//* DELETE
var deleteGenre = /*#__PURE__*/function () {
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
          return connection.query('CALL `spDeleteGenre`(?)', id);
        case 7:
          result = _context4.sent;
          _context4.t0 = result.affectedRows;
          _context4.next = _context4.t0 === 0 ? 11 : _context4.t0 === 1 ? 12 : 13;
          break;
        case 11:
          return _context4.abrupt("return", res.status(404).json({
            message: "Genero no existe"
          }));
        case 12:
          return _context4.abrupt("return", res.status(202).json({
            message: "Eliminado"
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
  return function deleteGenre(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

//* PUT
var updateGenre = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, NOMBRE, Genre, connection, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          NOMBRE = req.body.NOMBRE;
          Genre = {
            NOMBRE: NOMBRE
          }; //Valida si los campos estan vacios o no 
          if (!(NOMBRE === undefined)) {
            _context5.next = 6;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            message: "Escriba el nombre del GENERO."
          }));
        case 6:
          _context5.next = 8;
          return (0, _database.getConnection)();
        case 8:
          connection = _context5.sent;
          _context5.next = 11;
          return connection.query("CALL spUpdateGenre('".concat(id, "', '").concat(Genre.NOMBRE, "');"));
        case 11:
          result = _context5.sent;
          _context5.t0 = result.affectedRows;
          _context5.next = _context5.t0 === 0 ? 15 : _context5.t0 === 1 ? 16 : 17;
          break;
        case 15:
          return _context5.abrupt("return", res.status(404).json({
            message: "Sin ningun registro"
          }));
        case 16:
          return _context5.abrupt("return", res.status(202).json({
            message: "Actualizado"
          }));
        case 17:
          return _context5.abrupt("return", res.status(404).json({
            message: "Error, intentelo nuevamente mas tarde"
          }));
        case 18:
          _context5.next = 27;
          break;
        case 20:
          _context5.prev = 20;
          _context5.t1 = _context5["catch"](0);
          _context5.t2 = _context5.t1.errno;
          _context5.next = _context5.t2 === 1062 ? 25 : 26;
          break;
        case 25:
          return _context5.abrupt("return", res.status(400).json({
            message: "El Genero ingresado ya existe y actualizado"
          }));
        case 26:
          return _context5.abrupt("return", res.status(500).send(_context5.t1.message));
        case 27:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 20]]);
  }));
  return function updateGenre(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var methods = {
  getGenres: getGenres,
  getGenre: getGenre,
  addGenre: addGenre,
  deleteGenre: deleteGenre,
  updateGenre: updateGenre
};
exports.methods = methods;