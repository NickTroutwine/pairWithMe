var React = require('react');
var FinishedProjects = React.createClass({
	render: function() {
		return(
			<div className="col-xs-8 col-sm-4 bordered">
				<p>Title: </p>
				<p>Description: </p>
				<p>Tools Used: </p>
				<p>Project Path: </p>
			</div>
			);

	},

});
module.exports=(FinishedProjects);