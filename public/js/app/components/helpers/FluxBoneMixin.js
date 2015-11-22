module.exports = function(propName, events) {
    if(!events) {
		events = "add remove reset change";
	}
    return {
        componentDidMount: function() {
            this.props[propName].on(events, function(){
                this.forceUpdate();
            }.bind(this), this);
        },
        componentWillUnmount: function() {
            this.props.eventStore.off(null, null, this);
        }
    };
};
