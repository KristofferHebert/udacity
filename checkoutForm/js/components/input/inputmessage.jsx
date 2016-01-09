
const InputMessage = React.createClass({
        render(){
            return (
                <div className={this.props.messageContainerClass}>
                    <p className={this.props.className}>this.props.message</p>
                </div>
            )
        }
})

export default InputMessage
