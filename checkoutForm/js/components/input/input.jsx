import InputMessage from './inputmessage.jsx'

const Input = React.createClass({
        getDefaultProps(){
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
            }
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
                            onChange={this.props.onChange}
                            value={this.props.value}
                            placeholder={this.props.placeholder}
                            autoComplete={this.props.autoComplete}
                            minLength={this.props.minLength}
                            maxLength={this.props.maxLength}
                            required={this.props.isRequired}
                            autofocus={this.props.isAutoFocused} />
                    <InputMessage message={this.props.message}
                        messageContainerClass={this.props.messageContainerClass}
                        status={this.props.status}
                        message={this.props.message}
                        className={this.props.messageClassName}
                        />
                    </label>
                </div>
            )
        }
})

export default Input
