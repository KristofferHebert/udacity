(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputmessage = require('./inputmessage.jsx');

var _inputmessage2 = _interopRequireDefault(_inputmessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputDatalist = React.createClass({
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

        var listName = this.props.name + '-list';
        var options = this.props.options.map(function (option, i) {
            return React.createElement(
                'option',
                { key: i, value: option },
                'option'
            );
        });

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
                    autoComplete: this.props.autoComplete,
                    minLength: this.props.minLength,
                    maxLength: this.props.maxLength,
                    list: listName
                }),
                React.createElement(
                    'datalist',
                    { id: listName },
                    options
                ),
                React.createElement(_inputmessage2.default, { message: this.state.message || this.props.message,
                    messageContainerClass: this.props.messageContainerClass,
                    status: this.state.status,
                    className: this.state.messageClassName
                })
            )
        );
    }
});

exports.default = InputDatalist;

},{"./inputmessage.jsx":3}],2:[function(require,module,exports){
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
                    autoComplete: this.props.autoComplete,
                    minLength: this.props.minLength,
                    maxLength: this.props.maxLength,
                    required: this.props.isRequired }),
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

},{"./inputmessage.jsx":3}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var If = React.createClass({
    render: function render() {
        var children = this.props.logic ? this.props.children : null;
        return React.createElement(
            "div",
            null,
            children
        );
    }
});

exports.default = If;

},{}],5:[function(require,module,exports){
'use strict';

var _input = require('./components/input/input.jsx');

var _input2 = _interopRequireDefault(_input);

var _InputDatalist = require('./components/input/InputDatalist.jsx');

var _InputDatalist2 = _interopRequireDefault(_InputDatalist);

var _If = require('./components/utils/If.jsx');

var _If2 = _interopRequireDefault(_If);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkout = React.createClass({
    getInitialState: function getInitialState() {
        return {
            sameasbilling: false,
            email: {
                email: "",
                confirmEmail: ""
            },
            credittype: ['Visa', 'American Express', 'Mastercard', 'Discover']
        };
    },
    toggleSameAsBilling: function toggleSameAsBilling() {
        var sameasbilling = !this.state.sameasbilling;
        this.setState({ sameasbilling: sameasbilling });
    },
    handleEmailChange: function handleEmailChange(event) {
        var email = event.target.value;
        var name = event.target.name;
        var updatedEmail = this.state.email;
        updatedEmail[name] = email;

        this.setState(updatedEmail);
    },
    render: function render() {
        return React.createElement(
            'section',
            null,
            React.createElement(
                'header',
                null,
                React.createElement(
                    'nav',
                    null,
                    React.createElement(
                        'ul',
                        null,
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#' },
                                'Cam\'s Company'
                            )
                        ),
                        React.createElement(
                            'li',
                            { className: 'fr bold' },
                            React.createElement(
                                'a',
                                { href: '#' },
                                'Checkout Page'
                            )
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'wrapper' },
                React.createElement(
                    'form',
                    null,
                    React.createElement(
                        'h3',
                        null,
                        'About you'
                    ),
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(_input2.default, { type: 'text', label: 'Full Name', name: 'fname', placeholder: 'John Doe', autoComplete: 'name' }),
                        React.createElement(_input2.default, { type: 'email', label: 'Email', name: 'email', placeholder: 'johndoe@gmail.com', inputContainerClass: 'half', autoComplete: 'email', onChange: this.handleEmailChange }),
                        React.createElement(_input2.default, { type: 'email', label: 'Confirm Email', name: 'confirmEmail', placeholder: 'johndoe@gmail.com', inputContainerClass: 'half last', onChange: this.handleEmailChange, autoComplete: 'email' })
                    ),
                    React.createElement(_input2.default, { type: 'checkbox', label: 'Put me on the mailing list?', inputContainerClass: 'checkbox full', name: 'mailinglist' }),
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'h3',
                            null,
                            'Credit Card Details'
                        ),
                        React.createElement(_input2.default, { type: 'number', label: 'Credit Card Number', name: 'creditcard', inputContainerClass: 'half mobile-full mobile-last', placeholder: '#### #### #### ####', autoComplete: 'cc-number' }),
                        React.createElement(_input2.default, { type: 'date', label: 'Expiration Date', name: 'expirationdate', inputContainerClass: 'quarter mobile-half' }),
                        React.createElement(_input2.default, { type: 'number', label: 'CVC', name: 'cvc', placeholder: '777', maxLength: '3', inputContainerClass: 'quarter mobile-half last' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(_InputDatalist2.default, { type: 'text', label: 'Credit Card Type', placeholder: 'Visa', name: 'credittype', options: this.state.credittype, inputContainerClass: 'quarter mobile-half' })
                    ),
                    React.createElement(
                        'h3',
                        null,
                        'Billing Address'
                    ),
                    React.createElement(_input2.default, { type: 'text', label: 'Address 1', name: 'address1', placeholder: '123 Sesame Street', autoComplete: 'address' }),
                    React.createElement(_input2.default, { type: 'text', label: 'Address 2', name: 'address2', placeholder: 'APT #123', autoComplete: 'address' }),
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(_input2.default, { type: 'text', label: 'City', name: 'city', autoComplete: 'city', placeholder: 'Smallville', inputContainerClass: 'half' }),
                        React.createElement(_input2.default, { type: 'text', label: 'State', name: 'state', autoComplete: 'state', placeholder: 'KA', inputContainerClass: 'quarter' }),
                        React.createElement(_input2.default, { type: 'number', label: 'Zip code', name: 'zipcode', autoComplete: 'zipcode', placeholder: '67524', inputContainerClass: 'quarter last' })
                    ),
                    React.createElement(
                        'h3',
                        null,
                        'Shipping Address'
                    ),
                    React.createElement(_input2.default, { type: 'checkbox', label: 'Same as Billing Address?', inputContainerClass: 'checkbox full', name: 'sameasbilling', onChange: this.toggleSameAsBilling }),
                    React.createElement(
                        _If2.default,
                        { logic: !this.state.sameasbilling },
                        React.createElement(_input2.default, { type: 'text', label: 'Address 1', name: 'shippingaddress1', placeholder: '123 Sesame Street', autoComplete: 'address' }),
                        React.createElement(_input2.default, { type: 'text', label: 'Address 2', name: 'shippingaddress2', placeholder: 'APT #123', autoComplete: 'address' }),
                        React.createElement(
                            'div',
                            { className: 'row' },
                            React.createElement(_input2.default, { type: 'text', label: 'City', name: 'shippingcity', autoComplete: 'city', placeholder: 'Smallville', inputContainerClass: 'half' }),
                            React.createElement(_input2.default, { type: 'text', label: 'State', name: 'shippingstate', autoComplete: 'state', placeholder: 'KA', inputContainerClass: 'quarter' }),
                            React.createElement(_input2.default, { type: 'number', label: 'Zip code', name: 'shippingzipcode', autoComplete: 'zipcode', placeholder: '67524', inputContainerClass: 'quarter last' })
                        )
                    ),
                    React.createElement(_input2.default, { type: 'submit', value: 'Submit', className: 'btn btn-primary' })
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(Checkout, null), document.getElementById('checkout'));

},{"./components/input/InputDatalist.jsx":1,"./components/input/input.jsx":2,"./components/utils/If.jsx":4}]},{},[5]);
