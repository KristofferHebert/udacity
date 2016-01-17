'use strict';

import If from './components/utils/If.jsx'

import Input from './components/input/input.jsx'
import InputDatalist from './components/input/inputDatalist.jsx'
import Section from './components/section/section.jsx'
import ProgressBar from './components/progressbar/progressbar.jsx'

const Checkout = React.createClass({
    getInitialState(){
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
                credittypes: [
                    'Visa',
                    'American Express',
                    'Mastercard',
                    'Discover'
                ],
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
                address1:{
                    value: ''
                },
                address2:{
                    value: ''
                },
                city:{
                    value: ''
                },
                state: {
                    value: ''
                },
                zipcode: {
                    value: ''
                },
                shippingaddress1:{
                    value: ''
                },
                shippingaddress2:{
                    value: ''
                },
                shippingcity:{
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
            }
    },
    toggleSameAsBilling(){
        var sameasbilling = !this.state.sameasbilling
        this.setState({sameasbilling})
    },
    handleChange(event){

            var newState = this.state

            // Set attribute base on field name
            newState[event.target.name] = {
                value: event.target.value
            }

            this.setState(newState)
            this.isSectionOneComplete()
            this.isSectionTwoComplete()
            this.formIsComplete()

    },
    handleEmailChange(event){
            this.handleChange(event)

            // Compare matching email
            let email1 = this.state.email1
            let email2 = this.state.email2
            let emailStatus = this.emailsMatch(email1.value, email2.value)

            //Merge results with existing values
            email1 = Object.assign(email1, emailStatus)
            email2 = Object.assign(email2, emailStatus)

            this.setState({
                email1: email1,
                email2: email2
            })

            this.isSectionOneComplete()


    },
    handleCreditCardChange(event){

        this.handleChange(event)

        var validCreditCard = (this.state.creditcardnumber.value !== '' && this.state.creditcardnumber.value.length >= 13 && this.state.creditcardnumber.value.length <= 19)

        let creditcardnumber = this.state.creditcardnumber
        let message = (validCreditCard) ? '' : 'Invalid Credit Card'
        let status = (validCreditCard) ? 'message-success' : 'message-fail'

        let creditcardStatus = {
            message: message,
            status: status
        }

        creditcardnumber = Object.assign(creditcardnumber, creditcardStatus)

        this.setState({ creditcardnumber })
        this.isSectionTwoComplete()

    },
    isSectionOneComplete(){
        let showBillingDetails = ( this.state.fname.value !== '' && this.state.email1.value !== '' && this.state.email2.value !== '' && this.state.email2.emailsMatch === true)
        if(showBillingDetails){
            this.setProgress(33)
        }
        this.setState({
            showBillingDetails: showBillingDetails,
        })
    },
    isSectionTwoComplete(){
        let showBillingAddress = (this.state.creditcardnumber.value !== '' && this.state.creditcardnumber.message == '' && this.state.expirationdate.value !== '' && this.state.cvc.value !== '' && this.state.credittype.value !== '')
        if(showBillingAddress){
            this.setProgress(66)
        }
        this.setState({
            showBillingAddress: showBillingAddress,
        })
    },
    formIsComplete(){
        var formIsComplete = (this.state.address1.value != '' && this.state.address2.value != '' && this.state.city.value != ''  && this.state.state.value != '' && this.state.zipcode.value != '')

        if(formIsComplete){
            this.setProgress(100)
            this.setState({formIsComplete})
        }
    },
    setProgress(progress){
        this.setState({progress: progress})
    },
    emailsMatch(firstEmail, secondEmail){
        let emailsMatch = (firstEmail === secondEmail)
        let message = (emailsMatch) ? 'Passwords Match' : 'Passwords do not Match'
        let status = (emailsMatch) ? 'message-success' : 'message-fail'

        return {
            emailsMatch: emailsMatch,
            message: message,
            status: status
        }
    },
    render(){

        return (
            <section>
                <header>
                    <nav>
                        <ul>
                            <li><a href="#">Cam's Company</a></li>
                            <li className="fr bold"><a href="#">Checkout Page</a></li>
                        </ul>
                    </nav>
                </header>
                <div className="wrapper">
                    <form>
                        <h3>About you</h3>
                        <div className="row">
                            <Input type="text" label="Full Name" name="fname"
                                placeholder="John Doe"
                                autoComplete="name"
                                onChange={this.handleChange}
                                value={this.state.fname.value}
                                required={true} />
                            <Input type="email"
                                label="Email"
                                name="email1"
                                placeholder="johndoe@gmail.com"
                                inputContainerClass="half"
                                onChange={this.handleEmailChange}
                                value={this.state.email1.value}
                                status={this.state.email1.status}
                                message={this.state.email1.message}
                                autoComplete="email"
                                required={true}
                                />
                            <Input type="email"
                                label="Confirm Email"
                                name="email2"
                                placeholder="johndoe@gmail.com"
                                inputContainerClass="half last"
                                onChange={this.handleEmailChange}
                                value={this.state.email2.value}
                                status={this.state.email2.status}
                                message={this.state.email2.message}
                                autoComplete="email"
                                required={true}
                                />
                        </div>
                        <Input type="checkbox" label="Put me on the mailing list?" inputContainerClass="checkbox full" name="mailinglist"  />
                        <Section show={this.state.showBillingDetails}>
                            <div className="row">
                                <h3>Credit Card Details</h3>
                                <Input type="number" label="Credit Card Number" name="creditcardnumber"
                                    inputContainerClass="half mobile-full mobile-last"
                                    onChange={this.handleCreditCardChange}
                                    value={this.state.creditcardnumber.value}
                                    placeholder="#### #### #### ####"
                                    minLength="13"
                                    maxLength="19"
                                    value={this.state.creditcardnumber.value}
                                    status={this.state.creditcardnumber.status}
                                    message={this.state.creditcardnumber.message}
                                    required={true}
                                    autoComplete="cc-number" />
                                <Input type="date" label="Expiration Date"
                                    name="expirationdate" inputContainerClass="quarter mobile-half"
                                    onChange={this.handleChange} value={this.state.expirationdate.value}
                                    required={true}/>
                                <Input type="number" label="CVC" name="cvc"
                                    placeholder="777" maxLength="3"
                                    inputContainerClass="quarter mobile-half last"
                                    onChange={this.handleChange} value={this.state.cvc.value}
                                    required={true}/>
                            </div>
                            <div className="row">
                                <InputDatalist type="text" label="Credit Card Type" placeholder="Visa"
                                    name="credittype" options={this.state.credittypes}
                                    onChange={this.handleChange}
                                    value={this.state.credittype.value} inputContainerClass="quarter mobile-half" />
                            </div>
                        </Section>
                        <Section show={this.state.showBillingAddress}>
                            <h3>Billing Address</h3>
                            <Input type="text" label="Address 1" name="address1" placeholder="123 Sesame Street" autoComplete="address" onChange={this.handleChange} value={this.state.address1.value} required={true}/>
                            <Input type="text" label="Address 2" name="address2" placeholder="APT #123" autoComplete="address" onChange={this.handleChange} value={this.state.address2.value} required={true}/>

                            <div className="row">
                                <Input type="text" label="City" name="city" autoComplete="city" placeholder="Smallville" inputContainerClass="half" onChange={this.handleChange} value={this.state.city.value} required={true}/>
                                <Input type="text" label="State" name="state" autoComplete="state" placeholder="KA" inputContainerClass="quarter" onChange={this.handleChange} value={this.state.state.value} required={true}/>
                                <Input type="number" label="Zip code" name="zipcode" autoComplete="zipcode" placeholder="67524" inputContainerClass="quarter last" onChange={this.handleChange} value={this.state.zipcode.value} required={true}/>
                            </div>

                            <h3>Shipping Address</h3>
                            <Input type="checkbox" label="Same as Billing Address?" inputContainerClass="checkbox full" name="sameasbilling" onChange={this.toggleSameAsBilling}/>
                            <If logic={!this.state.sameasbilling}>
                                <Input type="text" label="Address 1" name="shippingaddress1" placeholder="123 Sesame Street" autoComplete="address" onChange={this.handleChange} value={this.state.shippingaddress1.value} />
                                <Input type="text" label="Address 2" name="shippingaddress2" placeholder="APT #123" autoComplete="address" onChange={this.handleChange} value={this.state.shippingaddress2.value} />

                                <div className="row">
                                    <Input type="text" label="City" name="shippingcity" autoComplete="city" placeholder="Smallville" inputContainerClass="half"  onChange={this.handleChange} value={this.state.shippingcity.value} />
                                    <Input type="text" label="State" name="shippingstate" autoComplete="state" placeholder="KA" inputContainerClass="quarter"  onChange={this.handleChange} value={this.state.shippingstate.value} />
                                    <Input type="number" label="Zip code" name="shippingzipcode" autoComplete="zipcode" placeholder="67524" inputContainerClass="quarter last"  onChange={this.handleChange} value={this.state.shippingzipcode.value} />
                                </div>
                            </If>
                            <If logic={this.state.formIsComplete}>
                                <Input type="submit" value="Submit" className="btn btn-primary"/>
                            </If>
                        </Section>
                        <ProgressBar progress={this.state.progress}/>
                    </form>
                </div>
            </section>
        )
    }
})

ReactDOM.render(<Checkout />, document.getElementById('checkout'))
