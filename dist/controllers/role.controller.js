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
var getRoles = /*#__PURE__*/function () {
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
          return connection.query("CALL spGetAllRoles()");
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
  return function getRoles(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getRole = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, connection, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          id = req.params.id; // Valida si los campos de la peticion están llenos o no
          if (!(rol === undefined)) {
            _context2.next = 4;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            message: "Por favor ingrese el ROL para el usuario"
          }));
        case 4:
          _context2.next = 6;
          return (0, _database.getConnection)();
        case 6:
          connection = _context2.sent;
          _context2.next = 9;
          return connection.query("CALL spGetRole(".concat(id, ")"));
        case 9:
          result = _context2.sent;
          // GET = SELECT

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
  return function getRole(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

//* POST
var addRole = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _rol, Role, connection, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _rol = req.body.rol;
          Role = {
            rol: _rol
          };
          if (!(_rol === undefined)) {
            _context3.next = 5;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: "Por favor ingrese el ROL para el usuario"
          }));
        case 5:
          _context3.next = 7;
          return (0, _database.getConnection)();
        case 7:
          connection = _context3.sent;
          _context3.next = 10;
          return connection.query("CALL spAddRole('".concat(Role.rol, "')"));
        case 10:
          result = _context3.sent;
          res.json({
            message: "Rol agregado"
          });
          _context3.next = 21;
          break;
        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](0);
          _context3.t1 = _context3.t0.errno;
          _context3.next = _context3.t1 === 1062 ? 19 : 20;
          break;
        case 19:
          return _context3.abrupt("return", res.status(400).json({
            message: "El rol ingresado ya existe"
          }));
        case 20:
          return _context3.abrupt("return", res.status(500).send(_context3.t0.message));
        case 21:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 14]]);
  }));
  return function addRole(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

//* DELETE
var deleteRole = /*#__PURE__*/function () {
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
          return connection.query("CALL spDeleteRole(".concat(id, ")"));
        case 7:
          result = _context4.sent;
          _context4.t0 = result.affectedRows;
          _context4.next = _context4.t0 === 0 ? 11 : _context4.t0 === 1 ? 12 : 13;
          break;
        case 11:
          return _context4.abrupt("return", res.status(400).json({
            message: "Rol no existente"
          }));
        case 12:
          return _context4.abrupt("return", res.status(202).json({
            message: "Rol eliminado"
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
  return function deleteRole(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

//* PUT
var updateRole = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, _rol2, Role, connection, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          _rol2 = req.body.rol;
          Role = {
            rol: _rol2
          }; // Valida si los campos de la peticion están llenos o no
          if (!(_rol2 === undefined)) {
            _context5.next = 6;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            message: "Por favor ingrese el ROL para el usuario"
          }));
        case 6:
          _context5.next = 8;
          return (0, _database.getConnection)();
        case 8:
          connection = _context5.sent;
          _context5.next = 11;
          return connection.query("CALL spUpdateRole(".concat(id, ",'").concat(Role.rol, "')"));
        case 11:
          result = _context5.sent;
          _context5.t0 = result.affectedRows;
          _context5.next = _context5.t0 === 0 ? 15 : _context5.t0 === 1 ? 16 : 17;
          break;
        case 15:
          return _context5.abrupt("return", res.status(400).json({
            message: "Rol no existente"
          }));
        case 16:
          return _context5.abrupt("return", res.status(202).json({
            message: "Rol actualizado"
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
            message: "El rol ingresado ya existe"
          }));
        case 26:
          return _context5.abrupt("return", res.status(500).send(_context5.t1.message));
        case 27:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 20]]);
  }));
  return function updateRole(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var methods = {
  getRoles: getRoles,
  getRole: getRole,
  addRole: addRole,
  deleteRole: deleteRole,
  updateRole: updateRole
};
exports.methods = methods;