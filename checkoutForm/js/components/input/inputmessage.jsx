
const InputMessage = React.createClass({
        render(){
            var classes = 'message ' + this.props.status + ' ' + this.props.className
            return (
                    <div>
                        { this.props.message ? (
                            <div className={this.props.messageContainerClass}>
                                <p className={classes}>{this.props.message}</p>
                            </div>
                        ) : null }
                    </div>
                )
        }
})

export default InputMessage
