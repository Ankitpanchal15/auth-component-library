'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactBootstrap = require('react-bootstrap');
require('bootstrap/dist/css/bootstrap.css');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function HelloWorld() {
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "p-5 text-center bg-info"
  }, /*#__PURE__*/React__default['default'].createElement(reactBootstrap.Container, null, /*#__PURE__*/React__default['default'].createElement("h1", null, "This is Test components library"), /*#__PURE__*/React__default['default'].createElement(reactBootstrap.Button, {
    className: "m-2"
  }, "Button"))));
}

exports.HelloWorld = HelloWorld;
