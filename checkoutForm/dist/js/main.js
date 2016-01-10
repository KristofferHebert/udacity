(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputmessage = require('./inputmessage.jsx');

var _inputmessage2 = _interopRequireDefault(_inputmessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = React.createClass({
    getInitialState: function getInitialState() {
        return {
            value: this.props.value || ""
        };
    },
    getDefaultProps: function getDefaultProps() {
        return {
            type: 'text',
            name: '',
            inputContainerClass: 'input-container',
            className: 'input',
            regex: ''
        };
    },
    onChange: function onChange(e) {
        var updatedValue = {
            value: e.target.value
        };
        var validate = this.props.validate || this.validate;

        this.setState(updatedValue);
        validate(updatedValue);
    },
    validate: function validate() {},
    render: function render() {
        return React.createElement(
            'div',
            { className: this.props.inputContainerClass },
            React.createElement(
                'label',
                { htmlFor: this.props.name },
                this.props.label,
                React.createElement('input', { type: this.props.type,
                    id: this.props.name,
                    name: this.props.name,
                    className: this.props.className,
                    onChange: this.props.onChange || this.onChange,
                    value: this.state.value,
                    placeholder: this.props.placeholder,
                    autoComplete: this.props.autoComplete }),
                React.createElement(_inputmessage2.default, { message: this.state.message || this.props.message,
                    messageContainerClass: this.props.messageContainerClass,
                    status: this.state.status,
                    className: this.state.messageClassName
                })
            )
        );
    }
});

exports.default = Input;

},{"./inputmessage.jsx":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var InputMessage = React.createClass({
    render: function render() {
        var classes = 'message ' + this.props.status + ' ' + this.props.className;
        return React.createElement(
            'div',
            null,
            this.props.message ? React.createElement(
                'div',
                { className: this.props.messageContainerClass },
                React.createElement(
                    'p',
                    { className: classes },
                    this.props.message
                )
            ) : null
        );
    }
});

exports.default = InputMessage;

},{}],3:[function(require,module,exports){
"use strict";

var _input = require("./components/input/input.jsx");

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkout = React.createClass({
    render: function render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "form",
                null,
                React.createElement(
                    "h3",
                    null,
                    "About you"
                ),
                React.createElement(_input2.default, { type: "text", label: "Full Name", name: "fname", placeholder: "John Doe", autoComplete: "fname" }),
                React.createElement(_input2.default, { type: "email", label: "Email", name: "email", autoComplete: "email" }),
                React.createElement(_input2.default, { type: "email", label: "Confirm Email", name: "confirmEmail", autoComplete: "email" }),
                React.createElement(_input2.default, { type: "checkbox", label: "Put me on the mailing list?", name: "mailinglist" }),
                React.createElement(
                    "h3",
                    null,
                    "Billing Address"
                ),
                React.createElement(_input2.default, { type: "text", label: "Address", name: "address", placeholder: "123 Sesame Street", autoComplete: "address" }),
                React.createElement(_input2.default, { type: "text", label: "City", name: "city", autoComplete: "city" }),
                React.createElement(_input2.default, { type: "submit", value: "Submit", className: "btn btn-primary" })
            )
        );
    }
});

ReactDOM.render(React.createElement(Checkout, null), document.getElementById('checkout'));

},{"./components/input/input.jsx":1}]},{},[3]);
