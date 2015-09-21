var React = require('react');
var UsersInfo = require('../profile/UserInfo.js');
var UsersData = require('../profile/UserData.js');
var Projects = require('../recent-projects/Projects.js');
var UsersProfile = React.createClass({
	contextTypes: {
		router: React.PropTypes.func.isRequired
	},
	getInitialState: function() {
		return {
			username : '',
			githubLink : '',
			picture: '',
			knownTags: [],
			wantTags: [],
			teacher: '',
			collab: '',
			student: '',
			projects: []
		};
	},
	componentDidMount: function() {
		var params = this.context.router.getCurrentParams();
		console.log(params.user);
		$.getJSON('/api/profile/'+params.user, function(data){
			console.log("returned",data)
			if(data.teacher) {
				var teach = "Teacher";
			}
			if(data.collaborator) {
				var collaborator = "Partner";
			}
			if(data.student) {
				var learn = "Student"
			}
			var known = data.known.map(function (element, index) {
				return (<div className="btn btn-xs tags">{element.tagName +" "}</div>);
			});
			var wanted = data.want.map( function (element,index) {
				return (<div className="btn btn-xs tags">{element.tagName +" "}</div>);
			});
			var ownedproject = data.ownedproject;
			console.log(ownedproject);
			this.setState({
				username: data.username,
				githubLink: data.githubProfileURL,
				picture: data.githubProfileImage,
				knownTags: known,
				wantTags: wanted,
				teacher: teach,
				collab: collaborator,
				student: learn,
				projects: ownedproject
			});
		}.bind(this));
	},
	render: function() {
		var otherProjs = this.state.projects.map(function(element, index){
			return(<Projects className="col-xs-12 col-sm-6 col-md-4" title={element.projectName.slice(0,17)} tools={element.tools.slice(0,17)} description={element.description.slice(0,17)} route={element.id} key={index}/>)
		})
		return (
			<div>
				<UsersInfo name={this.state.username} github={this.state.githubLink} picture={this.state.picture}/>
				<UsersData knownTags={this.state.knownTags} wantTags={this.state.wantTags} teacher={this.state.teacher} collab={this.state.collab} student={this.state.student}/>
				{otherProjs}
			</div>
		);
	}

});

module.exports = UsersProfile;
