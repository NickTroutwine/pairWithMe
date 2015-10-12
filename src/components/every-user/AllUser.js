var React = require('react');

var AllUsers = React.createClass({
componentDidMount: function() {
	$.getJSON('/api/users', function(result) {
    result = result.map(function (element, index) {
      return ({name: element.username}<br/>)
    })
    this.setState({options: result});
    }.bind(this))
  },
},
	render: function() {
		return (
			<div />
		);
	}

});

module.exports = AllUsers;