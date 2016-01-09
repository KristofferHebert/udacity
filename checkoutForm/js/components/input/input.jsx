import InputMessage from './inputmessage.jsx'

const Input = React.createClass({
        getDefaultProps(){
            return {
                type: 'text',
                name: '',
                inputContainerClass: 'input-container',
                className: 'input',
                regex: ''
            }
        },
        onChange(){

        },
        validate(){

        },
        render(){
            return (
                <div className={this.props.inputContainerClass}>
                    <label for={this.props.name}>
                        <input type={this.props.type}
                            id={this.props.name}
                            name={this.props.name}
                            className={this.props.className}
                            onChange={this.props.onChange || this.onChange}
                            />
                    </label>
                </div>
            )
        }
})

export default Input
