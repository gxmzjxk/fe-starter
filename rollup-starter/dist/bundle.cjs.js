'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _classCallCheck = require('@babel/runtime-corejs3/helpers/classCallCheck');
var _createClass = require('@babel/runtime-corejs3/helpers/createClass');
var _setTimeout = require('@babel/runtime-corejs3/core-js-stable/set-timeout');
var _Promise = require('@babel/runtime-corejs3/core-js-stable/promise');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _classCallCheck__default = /*#__PURE__*/_interopDefaultLegacy(_classCallCheck);
var _createClass__default = /*#__PURE__*/_interopDefaultLegacy(_createClass);
var _setTimeout__default = /*#__PURE__*/_interopDefaultLegacy(_setTimeout);
var _Promise__default = /*#__PURE__*/_interopDefaultLegacy(_Promise);

function fetchSth() {
  return new _Promise__default['default'](function (resolve) {
    _setTimeout__default['default'](function () {
      resolve('Some async result');
    });
  });
} // export async function foo() {
//     const res = await fetchSth();
//     return res;
// }

var Bar = /*#__PURE__*/function () {
  function Bar(name) {
    _classCallCheck__default['default'](this, Bar);

    this.name = name;
  }

  _createClass__default['default'](Bar, [{
    key: "init",
    value: function init() {
      fetchSth().then(function (res) {
        console.log(res);
      });
    }
  }]);

  return Bar;
}();

exports.Bar = Bar;
