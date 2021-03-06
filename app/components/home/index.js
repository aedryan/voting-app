import React from 'react';
import PollList from 'components/poll-list';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			polls: []
		};
	}

	componentDidMount() {
		$.get('/db/polls', (data) => {
			this.setState({
				polls: data
			});
		});
	}

	render() {
		return (
			<div id="home">
				<h2>All Polls</h2>
				<PollList polls={this.state.polls} />
			</div>
		);
	}
}