'use strict';

import Input from './components/input/input.jsx'
import InputDatalist from './components/input/InputDatalist.jsx'
import If from './components/utils/If.jsx'


const Checkout = React.createClass({
    getInitialState(){
            return {
                sameasbilling: false,
                credittype: [
                    'Visa',
                    'American Express',
                    'Mastercard',
                    'Discover'
                ]
            }
    },
    toggleSameAsBilling(){
        var sameasbilling = !this.state.sameasbilling
        this.setState({sameasbilling})
    },
    handleEmailChange(event){

            var newState = this.state
            newState[event.target.name] = event.target.value
            this.setState(newState)

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
                            <Input type="text" label="Full Name" name="fname" placeholder="John Doe" autoComplete="name" />
                            <Input type="email" label="Email" name="email1" placeholder="johndoe@gmail.com" inputContainerClass="half"  onChange={this.handleEmailChange} autoComplete="email" />
                            <Input type="email" label="Confirm Email" name="emai2"  placeholder="johndoe@gmail.com" inputContainerClass="half last" onChange={this.handleEmailChange} autoComplete="email" />
                        </div>
                        <Input type="checkbox" label="Put me on the mailing list?" inputContainerClass="checkbox full" name="mailinglist"  />
                        <div className="row">
                            <h3>Credit Card Details</h3>
                            <Input type="number" label="Credit Card Number" name="creditcard" inputContainerClass="half mobile-full mobile-last" placeholder="#### #### #### ####" autoComplete="cc-number" />
                            <Input type="date" label="Expiration Date" name="expirationdate" inputContainerClass="quarter mobile-half" />
                            <Input type="number" label="CVC" name="cvc" placeholder="777" maxLength="3" inputContainerClass="quarter mobile-half last" />
                        </div>
                        <div className="row">
                            <InputDatalist type="text" label="Credit Card Type" placeholder="Visa" name="credittype" options={this.state.credittype} inputContainerClass="quarter mobile-half" />
                        </div>
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
                    </form>
                </div>
            </section>
        )
    }
})

ReactDOM.render(<Checkout />, document.getElementById('checkout'))
