import Input from './components/input/input.jsx'

const Checkout = React.createClass({
    render(){
        return (
            <div>
                <form>
                    <h3>About you</h3>

                    <Input type="text" label="Full Name" name="fname" placeholder="John Doe" autoComplete="fname"/>
                    <Input type="email" label="Email" name="email" autoComplete="email"/>
                    <Input type="email" label="Confirm Email" name="confirmEmail" autoComplete="email"/>
                    <Input type="checkbox" label="Put me on the mailing list?" name="mailinglist" />

                    <h3>Billing Address</h3>
                    <Input type="text" label="Address" name="address" placeholder="123 Sesame Street" autoComplete="address"/>
                    <Input type="text" label="City" name="city" autoComplete="city"/>

                    <Input type="submit" value="Submit" className="btn btn-primary"/>
                </form>
            </div>
        )
    }
})

ReactDOM.render(<Checkout />, document.getElementById('checkout'))
