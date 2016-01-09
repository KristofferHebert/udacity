(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputmessage = require('./inputmessage.jsx');

var _inputmessage2 = _interopRequireDefault(_inputmessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = React.createClass({
    getDefaultProps: function getDefaultProps() {
        return {
            type: 'text',
            name: '',
            inputContainerClass: 'input-container',
            className: 'input',
            regex: ''
        };
    },
    onChange: function onChange() {},
    validate: function validate() {},
    render: function render() {
        return React.createElement(
            'div',
            { className: this.props.inputContainerClass },
            React.createElement(
                'label',
                { 'for': this.props.name },
                React.createElement('input', { type: this.props.type,
                    id: this.props.name,
                    name: this.props.name,
                    className: this.props.className,
                    onChange: this.props.onChange || this.onChange
                })
            )
        );
    }
});

exports.default = Input;

},{"./inputmessage.jsx":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var InputMessage = React.createClass({
    render: function render() {
        return React.createElement(
            "div",
            { className: this.props.messageContainerClass },
            React.createElement(
                "p",
                { className: this.props.className },
                "this.props.message"
            )
        );
    }
});

exports.default = InputMessage;

},{}],3:[function(require,module,exports){
'use strict';

var _input = require('./components/input/input.jsx');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkout = React.createClass({});

React.render(React.createElement(Checkout, null), document.getElementById('checkout'));

},{"./components/input/input.jsx":1}]},{},[3]);
