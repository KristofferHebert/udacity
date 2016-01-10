import InputMessage from './inputmessage.jsx'

const Input = React.createClass({
        getInitialState(){
            return {
                value: this.props.value || ""
            }
        },
        getDefaultProps(){
            return {
                type: 'text',
                name: '',
                inputContainerClass: 'input-container',
                className: 'input',
                regex: ''
            }
        },
        onChange(e){
            let updatedValue = {
                value: e.target.value
            }
            let validate = this.props.validate || this.validate

            this.setState(updatedValue)
            validate(updatedValue)
        },
        validate(){

        },
        render(){
            return (
                <div className={this.props.inputContainerClass}>
                    <label htmlFor={this.props.name}>
                        {this.props.label}
                        <input type={this.props.type}
                            id={this.props.name}
                            name={this.props.name}
                            className={this.props.className}
                            onChange={this.props.onChange || this.onChange}
                            value={this.state.value}
                            placeholder={this.props.placeholder}
                            autoComplete={this.props.autoComplete} />
                    <InputMessage message={this.state.message || this.props.message}
                        messageContainerClass={this.props.messageContainerClass}
                        status={this.state.status}
                        className={this.state.messageClassName}
                        />
                    </label>
                </div>
            )
        }
})

export default Input
