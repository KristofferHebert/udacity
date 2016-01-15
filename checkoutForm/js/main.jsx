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
                email1: {
                    value: "",
                    emailsMatch: "",
                    message: "",
                    status: ""
                },
                email2: {
                    value: "",
                    emailsMatch: "",
                    message: "",
                    status: ""
                },
                credittype: [
                    'Visa',
                    'American Express',
                    'Mastercard',
                    'Discover'
                ],
                showBillingDetails: false,
                showBillingAddress: false

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
            console.log(this.state)
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
                            <Input type="text" label="Full Name" name="fname" placeholder="John Doe" autoComplete="name" onChange={this.handleChange} value={this.state.fname} />
                            <Input type="email"
                                label="Email"
                                name="email1"
                                placeholder="johndoe@gmail.com"
                                inputContainerClass="half"
                                onChange={this.handleEmailChange}
                                value={this.state.email1.value}
                                status={this.state.email1.status}
                                message={this.state.email1.message}
                                autoComplete="email" />
                            <Input type="email"
                                label="Confirm Email"
                                name="email2"
                                placeholder="johndoe@gmail.com"
                                inputContainerClass="half"
                                onChange={this.handleEmailChange}
                                value={this.state.email2.value}
                                status={this.state.email2.status}
                                message={this.state.email2.message}
                                autoComplete="email" />
                        </div>
                        <Input type="checkbox" label="Put me on the mailing list?" inputContainerClass="checkbox full" name="mailinglist"  />
                        <Section show={this.state.showBillingDetails}>
                            <div className="row">
                                <h3>Credit Card Details</h3>
                                <Input type="number" label="Credit Card Number" name="creditcard" inputContainerClass="half mobile-full mobile-last" placeholder="#### #### #### ####" autoComplete="cc-number" />
                                <Input type="date" label="Expiration Date" name="expirationdate" inputContainerClass="quarter mobile-half" />
                                <Input type="number" label="CVC" name="cvc" placeholder="777" maxLength="3" inputContainerClass="quarter mobile-half last" />
                            </div>
                            <div className="row">
                                <InputDatalist type="text" label="Credit Card Type" placeholder="Visa" name="credittype" options={this.state.credittype} inputContainerClass="quarter mobile-half" />
                            </div>
                        </Section>
                        <Section show={this.state.showBillingDetails}>
                            <h3>Billing Address</h3>
                            <Input type="text" label="Address 1" name="address1" placeholder="123 Sesame Street" autoComplete="address" />
                            <Input type="text" label="Address 2" name="address2" placeholder="APT #123" autoComplete="address" />

                            <div className="row">
                                <Input type="text" label="City" name="city" autoComplete="city" placeholder="Smallville" inputContainerClass="half" />
                                <Input type="text" label="State" name="state" autoComplete="state" placeholder="KA" inputContainerClass="quarter" />
                                <Input type="number" label="Zip code" name="zipcode" autoComplete="zipcode" placeholder="67524" inputContainerClass="quarter last" />
                            </div>

                            <h3>Shipping Address</h3>
                            <Input type="checkbox" label="Same as Billing Address?" inputContainerClass="checkbox full" name="sameasbilling" onChange={this.toggleSameAsBilling}/>
                            <If logic={!this.state.sameasbilling}>
                                <Input type="text" label="Address 1" name="shippingaddress1" placeholder="123 Sesame Street" autoComplete="address"/>
                                <Input type="text" label="Address 2" name="shippingaddress2" placeholder="APT #123" autoComplete="address"/>

                                <div className="row">
                                    <Input type="text" label="City" name="shippingcity" autoComplete="city" placeholder="Smallville" inputContainerClass="half"/>
                                    <Input type="text" label="State" name="shippingstate" autoComplete="state" placeholder="KA" inputContainerClass="quarter"/>
                                    <Input type="number" label="Zip code" name="shippingzipcode" autoComplete="zipcode" placeholder="67524" inputContainerClass="quarter last"/>
                                </div>
                            </If>
                            <Input type="submit" value="Submit" className="btn btn-primary"/>
                        </Section>
                        <ProgressBar />
                    </form>
                </div>
            </section>
        )
    }
})

ReactDOM.render(<Checkout />, document.getElementById('checkout'))
