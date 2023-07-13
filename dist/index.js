"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app"));
var _config = require("./config");
// funcion principal

var main = function main() {
  _app["default"].listen(_app["default"].get("PORT"), _config.caseEntorno);
};
main();