const Bar = React.createClass({
    getDefaultProps(){
        return {
            progress: 0
        }
    },
    render(){
        let width = this.props.progress + '%'
        let progressPosition = { width }
        let status = (width !== '100%') ? width + ' complete' : 'Complete!'

        return (
            <div>
                <div className='progressbar-container'>
                    <div className='progressbar' style={progressPosition}></div>
                </div>
                <span className='fr mt progressbar-status'>{status}</span>
            </div>
        )
    }
})

export default Bar
