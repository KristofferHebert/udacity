const If = React.createClass({
        render(){
            const children = (this.props.logic) ? this.props.children : null
            return (
                <div>
                    {children}
                </div>
            )
        }
})

export default If
