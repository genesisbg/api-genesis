"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.methods = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../db/database");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// interacciones con la base de datos

//* funcion de peticion GET
var getLoanHeaders = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var connection, result, data, _iterator, _step, e, date;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _database.getConnection)();
        case 3:
          connection = _context.sent;
          _context.next = 6;
          return connection.query("CALL spGetAllHeaderLoan()");
        case 6:
          result = _context.sent;
          // GET = SELECT
          data = result[0];
          _iterator = _createForOfIteratorHelper(data);
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              e = _step.value;
              date = new Date(e.FECHA_DEVOLUCION);
              e.FECHA_DEVOLUCION = "".concat(date.getFullYear(), "/").concat(date.getMonth() + 1, "/").concat(date.getDate());
              date = new Date(e.FECHA_PRESTAMO);
              e.FECHA_PRESTAMO = "".concat(date.getFullYear(), "/").concat(date.getMonth() + 1, "/").concat(date.getDate());
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          res.json(data);
          _context.next = 16;
          break;
        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          res.status(500).send(_context.t0.message);
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 13]]);
  }));
  return function getLoanHeaders(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getLoanHeader = /*#__PURE__*/function () {
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
          return connection.query("CALL spGetHeaderLoan(?)", id);
        case 7:
          result = _context2.sent;
          if (!(result[0][0] === undefined)) {
            _context2.next = 10;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            message: "El Prestamo No se encontró"
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
  return function getLoanHeader(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

//* funcion de peticion POST
var addLoanHeader = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, FECHA_PRESTAMO, FECHA_DEVOLUCION, ESTADO, DNI_USUARIO, LoanHeader, connection;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$body = req.body, FECHA_PRESTAMO = _req$body.FECHA_PRESTAMO, FECHA_DEVOLUCION = _req$body.FECHA_DEVOLUCION, ESTADO = _req$body.ESTADO, DNI_USUARIO = _req$body.DNI_USUARIO;
          LoanHeader = {
            FECHA_PRESTAMO: FECHA_PRESTAMO,
            FECHA_DEVOLUCION: FECHA_DEVOLUCION,
            ESTADO: ESTADO,
            DNI_USUARIO: DNI_USUARIO
          };
          if (!(FECHA_PRESTAMO === undefined)) {
            _context3.next = 5;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: "Por favor ingrese la FECHAS DE PRESTAMO."
          }));
        case 5:
          if (!(FECHA_DEVOLUCION === undefined)) {
            _context3.next = 7;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: "Por favor ingrese la FECHA DE DEVOLUCION."
          }));
        case 7:
          if (!(ESTADO === undefined)) {
            _context3.next = 9;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: "Por favor ingrese la ESTADO."
          }));
        case 9:
          if (!(DNI_USUARIO === undefined)) {
            _context3.next = 11;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: "Por favor ingrese el DNI."
          }));
        case 11:
          _context3.next = 13;
          return (0, _database.getConnection)();
        case 13:
          connection = _context3.sent;
          _context3.next = 16;
          return connection.query("CALL spAddHeaderLoan('".concat(LoanHeader.FECHA_PRESTAMO, "','").concat(LoanHeader.FECHA_DEVOLUCION, "','").concat(LoanHeader.ESTADO, "','").concat(LoanHeader.DNI_USUARIO, "');"));
        case 16:
          res.status(201).json({
            message: "Prestamo  Realizado"
          });
          _context3.next = 27;
          break;
        case 19:
          _context3.prev = 19;
          _context3.t0 = _context3["catch"](0);
          _context3.t1 = _context3.t0.errno;
          _context3.next = _context3.t1 === 1062 ? 24 : _context3.t1 === 1060 ? 25 : 26;
          break;
        case 24:
          return _context3.abrupt("return", res.status(400).json({
            message: "El Prestamo ya ha sido realizado."
          }));
        case 25:
          return _context3.abrupt("return", res.status(400).json({
            message: "El Prestamo ya ha sido realizado."
          }));
        case 26:
          return _context3.abrupt("return", res.status(500).send(_context3.t0.message));
        case 27:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 19]]);
  }));
  return function addLoanHeader(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

//* funcion de peticion DELETE
var deleteLoanHeader = /*#__PURE__*/function () {
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
          return connection.query("CALL `spDeleteHeaderLoan`(?)", id);
        case 7:
          result = _context4.sent;
          _context4.t0 = result.affectedRows;
          _context4.next = _context4.t0 === 0 ? 11 : _context4.t0 === 1 ? 12 : 13;
          break;
        case 11:
          return _context4.abrupt("return", res.status(400).json({
            message: "Prestamo no ELIMINADO."
          }));
        case 12:
          return _context4.abrupt("return", res.status(202).json({
            message: "Prestamo ELIMINADO"
          }));
        case 13:
          return _context4.abrupt("return", res.status(500).json({
            message: " Error, intenta de nuevo mas tarde"
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
  return function deleteLoanHeader(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

//* funcion de peticion PUT
var updateLoanHeader = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, _req$body2, FECHA_PRESTAMO, FECHA_DEVOLUCION, ESTADO, DNI_USUARIO, LoanHeader, connection, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          _req$body2 = req.body, FECHA_PRESTAMO = _req$body2.FECHA_PRESTAMO, FECHA_DEVOLUCION = _req$body2.FECHA_DEVOLUCION, ESTADO = _req$body2.ESTADO, DNI_USUARIO = _req$body2.DNI_USUARIO;
          LoanHeader = {
            FECHA_PRESTAMO: FECHA_PRESTAMO,
            FECHA_DEVOLUCION: FECHA_DEVOLUCION,
            ESTADO: ESTADO,
            DNI_USUARIO: DNI_USUARIO
          };
          if (!(FECHA_PRESTAMO === undefined)) {
            _context5.next = 6;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            message: "Por favor ingrese la FECHAS DE PRESTAMO."
          }));
        case 6:
          if (!(FECHA_DEVOLUCION === undefined)) {
            _context5.next = 8;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            message: "Por favor ingrese la FECHA DE DEVOLUCION."
          }));
        case 8:
          if (!(ESTADO === undefined)) {
            _context5.next = 10;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            message: "Por favor ingrese la ESTADO."
          }));
        case 10:
          if (!(DNI_USUARIO === undefined)) {
            _context5.next = 12;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            message: "Por favor ingrese el DNI."
          }));
        case 12:
          _context5.next = 14;
          return (0, _database.getConnection)();
        case 14:
          connection = _context5.sent;
          _context5.next = 17;
          return connection.query("CALL spUpdateHeaderLoan('".concat(id, "','").concat(LoanHeader.FECHA_PRESTAMO, "','").concat(LoanHeader.FECHA_DEVOLUCION, "','").concat(LoanHeader.ESTADO, "','").concat(LoanHeader.DNI_USUARIO, "');"));
        case 17:
          result = _context5.sent;
          _context5.t0 = result.affectedRows;
          _context5.next = _context5.t0 === 0 ? 21 : _context5.t0 === 1 ? 22 : 23;
          break;
        case 21:
          return _context5.abrupt("return", res.status(404).json({
            message: "Prestamo no ENCONTRADO."
          }));
        case 22:
          return _context5.abrupt("return", res.status(202).json({
            message: "Prestamo ACTUALIZADO."
          }));
        case 23:
          return _context5.abrupt("return", res.status(400).send(error.message));
        case 24:
          _context5.next = 29;
          break;
        case 26:
          _context5.prev = 26;
          _context5.t1 = _context5["catch"](0);
          res.status(500).send(_context5.t1.message);
        case 29:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 26]]);
  }));
  return function updateLoanHeader(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var methods = {
  getLoanHeaders: getLoanHeaders,
  getLoanHeader: getLoanHeader,
  addLoanHeader: addLoanHeader,
  deleteLoanHeader: deleteLoanHeader,
  updateLoanHeader: updateLoanHeader
};
exports.methods = methods;