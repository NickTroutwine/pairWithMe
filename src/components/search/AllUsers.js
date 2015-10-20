var React = require('react');
var Select = require('react-select');

var AllUsers = React.createClass({
getInitialState: function() {
	return {
		options:[] 
	};
},
onChangeOption: function(){
	window.location.pathname = '/profile/'+ this.state.options;
},
componentDidMount: function() {
	$.getJSON('/api/users', function(result) {
    result = result.map(function (element, index) {
      return ({value: element.username, label: element.username})
    })
    this.setState({options: result});
    }.bind(this))
  },
	render: function() {
		return (
			<div>
				<form>
					<div className="form-group col-xs-8 col-xs-offset-2 col-sm-8 text-center">
						<label>All Users</label>
						<Select name="form-field-name" options={this.state.options} onChange={this.onChangeOption} className="text-left"/>
					</div>
			</form>
			</div>
		);
	}

});

module.exports = AllUsers;
