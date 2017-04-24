import React from 'react';
import PollList from 'components/poll-list';

export default class MyPolls extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			polls: []
		};
	}

	componentDidMount() {
		$.get('/db/polls/user', (data) => {
			this.setState({
				polls: data
			});
		});
	}

	render() {
		return (
			<div id="my-polls">
				<h2>My Polls</h2>
				<PollList polls={this.state.polls} />
			</div>
		);
	}
}