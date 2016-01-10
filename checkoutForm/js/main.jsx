import Input from './components/input/input.jsx'

const Checkout = React.createClass({
    render(){
        return (
            <div className="wrapper">
                <form>
                    <h3>About you</h3>

                    <Input type="text" label="Full Name" name="fname" placeholder="John Doe" autoComplete="fname"/>
                    <Input type="email" label="Email" name="email" placeholder="johndoe@gmail.com" inputContainerClass="half" autoComplete="email"/>
                    <Input type="email" label="Confirm Email" placeholder="johndoe@gmail.com" name="confirmEmail" inputContainerClass="half last" autoComplete="email"/>
                    <Input type="checkbox" label="Put me on the mailing list?" name="mailinglist" />

                    <h3>Credit Card Details</h3>
                    <Input type="text" label="Credit Card Number" name="creditcard" inputContainerClass="half" placeholder="#### #### #### ####" />

                    <Input type="date" label="Expiration Date" name="expirationdate" inputContainerClass="half last"/>

                    <h3>Billing Address</h3>
                    <Input type="text" label="Address 1" name="address1" placeholder="123 Sesame Street" autoComplete="address"/>
                    <Input type="text" label="Address 2" name="address2" placeholder="APT #123" autoComplete="address"/>
                    <Input type="text" label="City" name="city" autoComplete="city" inputContainerClass="half"/>
                    <Input type="text" label="State" name="state" autoComplete="state" inputContainerClass="quarter"/>
                    <Input type="text" label="Zipcode" name="zipcode" autoComplete="zipcode" inputContainerClass="quarter last"/>

                    <h3>Shipping Address</h3>
                    <Input type="checkbox" label="Same as Billing Address?" name="sameasbilling" />
                    <Input type="text" label="Address 1" name="address1" placeholder="123 Sesame Street" autoComplete="address"/>
                    <Input type="text" label="Address 2" name="address2" placeholder="APT #123" autoComplete="address"/>
                    <Input type="text" label="City" name="city" autoComplete="city" inputContainerClass="half"/>
                    <Input type="text" label="State" name="state" autoComplete="state" inputContainerClass="quarter"/>
                    <Input type="text" label="Zipcode" name="zipcode" autoComplete="zipcode" inputContainerClass="quarter last"/>

                    <Input type="submit" value="Submit" className="btn btn-primary"/>
                </form>
            </div>
        )
    }
})

ReactDOM.render(<Checkout />, document.getElementById('checkout'))
