import InputMessage from './inputmessage.jsx'

const InputDatalist = React.createClass({
        getDefaultProps(){
            return {
                type: 'text',
                name: '',
                value: '',
                inputContainerClass: 'input-container',
                className: 'input',
                regex: ''
            }
        },
        render(){

            const listName = this.props.name + '-list'
            const options = this.props.options.map((option, i)=>{
                return (
                    <option key={i} value={option}>option</option>
                )
            })

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
                            list={listName}
                            />
                        <datalist id={listName} value={this.props.value}>
                            {options}
                        </datalist>
                    <InputMessage message={this.props.message}
                        messageContainerClass={this.props.messageContainerClass}
                        status={this.props.status}
                        className={this.props.messageClassName}
                        />
                    </label>
                </div>
            )
        }
})

export default InputDatalist
