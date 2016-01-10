import Input from './components/input/input.jsx'

const Checkout = React.createClass({
    render(){
        return (
            <div>
                <Input type="text" label="Full Name" name="fname" autoComplete="fname"/>

            </div>
        )
    }
})

ReactDOM.render(<Checkout />, document.getElementById('checkout'))
