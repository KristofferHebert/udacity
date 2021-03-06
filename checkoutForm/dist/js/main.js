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
            messageClassName: '',
            inputContainerClass: 'input-container',
            className: 'input',
            regex: '',
            value: '',
            message: '',
            status: '',
            isRequired: false,
            isAutoFocused: false
        };
    },
    render: function render() {
        var className = this.props.value !== '' ? 'dirty ' + this.props.className : this.props.className;

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
                    className: className,
                    onChange: this.props.onChange,
                    value: this.props.value,
                    placeholder: this.props.placeholder,
                    autoComplete: this.props.autoComplete,
                    minLength: this.props.minLength,
                    maxLength: this.props.maxLength,
                    required: this.props.required,
                    autofocus: this.props.isAutoFocused }),
                React.createElement(_inputmessage2.default, { message: this.props.message,
                    messageContainerClass: this.props.messageContainerClass,
                    status: this.props.status,
                    message: this.props.message,
                    className: this.props.messageClassName
                })
            )
        );
    }
});

exports.default = Input;

},{"./inputmessage.jsx":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputmessage = require('./inputmessage.jsx');

var _inputmessage2 = _interopRequireDefault(_inputmessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputDatalist = React.createClass({
    getDefaultProps: function getDefaultProps() {
        return {
            type: 'text',
            name: '',
            value: '',
            inputContainerClass: 'input-container',
            className: 'input',
            regex: ''
        };
    },
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
                    onChange: this.props.onChange,
                    value: this.props.value,
                    placeholder: this.props.placeholder,
                    autoComplete: this.props.autoComplete,
                    minLength: this.props.minLength,
                    maxLength: this.props.maxLength,
                    list: listName
                }),
                React.createElement(
                    'datalist',
                    { id: listName, value: this.props.value },
                    options
                ),
                React.createElement(_inputmessage2.default, { message: this.props.message,
                    messageContainerClass: this.props.messageContainerClass,
                    status: this.props.status,
                    className: this.props.messageClassName
                })
            )
        );
    }
});

exports.default = InputDatalist;

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
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Bar = React.createClass({
    getDefaultProps: function getDefaultProps() {
        return {
            progress: 0
        };
    },
    render: function render() {
        var width = this.props.progress + '%';
        var progressPosition = { width: width };
        var status = width !== '100%' ? width + ' complete' : 'Complete!';

        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                { className: 'progressbar-container' },
                React.createElement('div', { className: 'progressbar', style: progressPosition })
            ),
            React.createElement(
                'span',
                { className: 'fr mt progressbar-status' },
                status
            )
        );
    }
});

exports.default = Bar;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Section = React.createClass({
    render: function render() {
        return React.createElement(
            "section",
            null,
            this.props.show ? this.props.children : null
        );
    }
});

exports.default = Section;

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
'use strict';

var _If = require('./components/utils/If.jsx');

var _If2 = _interopRequireDefault(_If);

var _input = require('./components/input/input.jsx');

var _input2 = _interopRequireDefault(_input);

var _inputDatalist = require('./components/input/inputDatalist.jsx');

var _inputDatalist2 = _interopRequireDefault(_inputDatalist);

var _section = require('./components/section/section.jsx');

var _section2 = _interopRequireDefault(_section);

var _progressbar = require('./components/progressbar/progressbar.jsx');

var _progressbar2 = _interopRequireDefault(_progressbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkout = React.createClass({
    getInitialState: function getInitialState() {
        return {
            sameasbilling: false,
            fname: {
                value: '',
                message: '',
                status: ''
            },
            email1: {
                value: '',
                emailsMatch: '',
                message: '',
                status: ''
            },
            email2: {
                value: '',
                emailsMatch: '',
                message: '',
                status: ''
            },
            credittypes: ['Visa', 'American Express', 'Mastercard', 'Discover'],
            credittype: {
                value: '',
                message: '',
                status: ''
            },
            creditcardnumber: {
                value: ''
            },
            cvc: {
                value: ''
            },
            expirationdate: {
                value: ''
            },
            address1: {
                value: ''
            },
            address2: {
                value: ''
            },
            city: {
                value: ''
            },
            state: {
                value: ''
            },
            zipcode: {
                value: ''
            },
            shippingaddress1: {
                value: ''
            },
            shippingaddress2: {
                value: ''
            },
            shippingcity: {
                value: ''
            },
            shippingstate: {
                value: ''
            },
            shippingzipcode: {
                value: ''
            },
            progress: 0,
            showBillingAddress: false,
            showBillingDetails: false
        };
    },
    toggleSameAsBilling: function toggleSameAsBilling() {
        var sameasbilling = !this.state.sameasbilling;
        this.setState({ sameasbilling: sameasbilling });
    },
    handleChange: function handleChange(event) {

        var newState = this.state;

        // Set attribute base on field name
        newState[event.target.name] = {
            value: event.target.value
        };

        this.setState(newState);
        this.isSectionOneComplete();
        this.isSectionTwoComplete();
        this.formIsComplete();
    },
    handleEmailChange: function handleEmailChange(event) {
        this.handleChange(event);

        // Compare matching email
        var email1 = this.state.email1;
        var email2 = this.state.email2;
        var emailStatus = this.emailsMatch(email1.value, email2.value);

        //Merge results with existing values
        email1 = Object.assign(email1, emailStatus);
        email2 = Object.assign(email2, emailStatus);

        this.setState({
            email1: email1,
            email2: email2
        });

        this.isSectionOneComplete();
    },
    handleCreditCardChange: function handleCreditCardChange(event) {

        this.handleChange(event);

        var validCreditCard = this.state.creditcardnumber.value !== '' && this.state.creditcardnumber.value.length >= 13 && this.state.creditcardnumber.value.length <= 19;

        var creditcardnumber = this.state.creditcardnumber;
        var message = validCreditCard ? '' : 'Invalid Credit Card';
        var status = validCreditCard ? 'message-success' : 'message-fail';

        var creditcardStatus = {
            message: message,
            status: status
        };

        creditcardnumber = Object.assign(creditcardnumber, creditcardStatus);

        this.setState({ creditcardnumber: creditcardnumber });
        this.isSectionTwoComplete();
    },
    isSectionOneComplete: function isSectionOneComplete() {
        var showBillingDetails = this.state.fname.value !== '' && this.state.email1.value !== '' && this.state.email2.value !== '' && this.state.email2.emailsMatch === true;
        if (showBillingDetails) {
            this.setProgress(33);
        }
        this.setState({
            showBillingDetails: showBillingDetails
        });
    },
    isSectionTwoComplete: function isSectionTwoComplete() {
        var showBillingAddress = this.state.creditcardnumber.value !== '' && this.state.creditcardnumber.message == '' && this.state.expirationdate.value !== '' && this.state.cvc.value !== '' && this.state.credittype.value !== '';
        if (showBillingAddress) {
            this.setProgress(66);
        }
        this.setState({
            showBillingAddress: showBillingAddress
        });
    },
    formIsComplete: function formIsComplete() {
        var formIsComplete = this.state.address1.value != '' && this.state.address2.value != '' && this.state.city.value != '' && this.state.state.value != '' && this.state.zipcode.value != '';

        if (formIsComplete) {
            this.setProgress(100);
            this.setState({ formIsComplete: formIsComplete });
        }
    },
    setProgress: function setProgress(progress) {
        this.setState({ progress: progress });
    },
    emailsMatch: function emailsMatch(firstEmail, secondEmail) {
        var emailsMatch = firstEmail === secondEmail;
        var message = emailsMatch ? 'Passwords Match' : 'Passwords do not Match';
        var status = emailsMatch ? 'message-success' : 'message-fail';

        return {
            emailsMatch: emailsMatch,
            message: message,
            status: status
        };
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
                        React.createElement(_input2.default, { type: 'text', label: 'Full Name', name: 'fname',
                            placeholder: 'John Doe',
                            autoComplete: 'name',
                            onChange: this.handleChange,
                            value: this.state.fname.value,
                            required: true }),
                        React.createElement(_input2.default, { type: 'email',
                            label: 'Email',
                            name: 'email1',
                            placeholder: 'johndoe@gmail.com',
                            inputContainerClass: 'half',
                            onChange: this.handleEmailChange,
                            value: this.state.email1.value,
                            status: this.state.email1.status,
                            message: this.state.email1.message,
                            autoComplete: 'email',
                            required: true
                        }),
                        React.createElement(_input2.default, { type: 'email',
                            label: 'Confirm Email',
                            name: 'email2',
                            placeholder: 'johndoe@gmail.com',
                            inputContainerClass: 'half last',
                            onChange: this.handleEmailChange,
                            value: this.state.email2.value,
                            status: this.state.email2.status,
                            message: this.state.email2.message,
                            autoComplete: 'email',
                            required: true
                        })
                    ),
                    React.createElement(_input2.default, { type: 'checkbox', label: 'Put me on the mailing list?', inputContainerClass: 'checkbox full', name: 'mailinglist' }),
                    React.createElement(
                        _section2.default,
                        { show: this.state.showBillingDetails },
                        React.createElement(
                            'div',
                            { className: 'row' },
                            React.createElement(
                                'h3',
                                null,
                                'Credit Card Details'
                            ),
                            React.createElement(_input2.default, { type: 'number', label: 'Credit Card Number', name: 'creditcardnumber',
                                inputContainerClass: 'half mobile-full mobile-last',
                                onChange: this.handleCreditCardChange,
                                value: this.state.creditcardnumber.value,
                                placeholder: '#### #### #### ####',
                                minLength: '13',
                                maxLength: '19',
                                value: this.state.creditcardnumber.value,
                                status: this.state.creditcardnumber.status,
                                message: this.state.creditcardnumber.message,
                                required: true,
                                autoComplete: 'cc-number' }),
                            React.createElement(_input2.default, { type: 'date', label: 'Expiration Date',
                                name: 'expirationdate', inputContainerClass: 'quarter mobile-half',
                                onChange: this.handleChange, value: this.state.expirationdate.value,
                                required: true }),
                            React.createElement(_input2.default, { type: 'number', label: 'CVC', name: 'cvc',
                                placeholder: '777', maxLength: '3',
                                inputContainerClass: 'quarter mobile-half last',
                                onChange: this.handleChange, value: this.state.cvc.value,
                                required: true })
                        ),
                        React.createElement(
                            'div',
                            { className: 'row' },
                            React.createElement(_inputDatalist2.default, { type: 'text', label: 'Credit Card Type', placeholder: 'Visa',
                                name: 'credittype', options: this.state.credittypes,
                                onChange: this.handleChange,
                                value: this.state.credittype.value, inputContainerClass: 'quarter mobile-half' })
                        )
                    ),
                    React.createElement(
                        _section2.default,
                        { show: this.state.showBillingAddress },
                        React.createElement(
                            'h3',
                            null,
                            'Billing Address'
                        ),
                        React.createElement(_input2.default, { type: 'text', label: 'Address 1', name: 'address1', placeholder: '123 Sesame Street', autoComplete: 'address', onChange: this.handleChange, value: this.state.address1.value, required: true }),
                        React.createElement(_input2.default, { type: 'text', label: 'Address 2', name: 'address2', placeholder: 'APT #123', autoComplete: 'address', onChange: this.handleChange, value: this.state.address2.value, required: true }),
                        React.createElement(
                            'div',
                            { className: 'row' },
                            React.createElement(_input2.default, { type: 'text', label: 'City', name: 'city', autoComplete: 'city', placeholder: 'Smallville', inputContainerClass: 'half', onChange: this.handleChange, value: this.state.city.value, required: true }),
                            React.createElement(_input2.default, { type: 'text', label: 'State', name: 'state', autoComplete: 'state', placeholder: 'KA', inputContainerClass: 'quarter', onChange: this.handleChange, value: this.state.state.value, required: true }),
                            React.createElement(_input2.default, { type: 'number', label: 'Zip code', name: 'zipcode', autoComplete: 'zipcode', placeholder: '67524', inputContainerClass: 'quarter last', onChange: this.handleChange, value: this.state.zipcode.value, required: true })
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
                            React.createElement(_input2.default, { type: 'text', label: 'Address 1', name: 'shippingaddress1', placeholder: '123 Sesame Street', autoComplete: 'address', onChange: this.handleChange, value: this.state.shippingaddress1.value }),
                            React.createElement(_input2.default, { type: 'text', label: 'Address 2', name: 'shippingaddress2', placeholder: 'APT #123', autoComplete: 'address', onChange: this.handleChange, value: this.state.shippingaddress2.value }),
                            React.createElement(
                                'div',
                                { className: 'row' },
                                React.createElement(_input2.default, { type: 'text', label: 'City', name: 'shippingcity', autoComplete: 'city', placeholder: 'Smallville', inputContainerClass: 'half', onChange: this.handleChange, value: this.state.shippingcity.value }),
                                React.createElement(_input2.default, { type: 'text', label: 'State', name: 'shippingstate', autoComplete: 'state', placeholder: 'KA', inputContainerClass: 'quarter', onChange: this.handleChange, value: this.state.shippingstate.value }),
                                React.createElement(_input2.default, { type: 'number', label: 'Zip code', name: 'shippingzipcode', autoComplete: 'zipcode', placeholder: '67524', inputContainerClass: 'quarter last', onChange: this.handleChange, value: this.state.shippingzipcode.value })
                            )
                        ),
                        React.createElement(
                            _If2.default,
                            { logic: this.state.formIsComplete },
                            React.createElement(_input2.default, { type: 'submit', value: 'Submit', className: 'btn btn-primary' })
                        )
                    ),
                    React.createElement(_progressbar2.default, { progress: this.state.progress })
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(Checkout, null), document.getElementById('checkout'));

},{"./components/input/input.jsx":1,"./components/input/inputDatalist.jsx":2,"./components/progressbar/progressbar.jsx":4,"./components/section/section.jsx":5,"./components/utils/If.jsx":6}]},{},[7]);
