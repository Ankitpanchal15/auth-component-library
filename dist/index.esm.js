import React from 'react';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function HelloWorld() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "p-5 text-center bg-info"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("h1", null, "This is Test components library"), /*#__PURE__*/React.createElement(Button, {
    className: "m-2"
  }, "Button"))));
}

export { HelloWorld };
