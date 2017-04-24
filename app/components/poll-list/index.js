import React from 'react';

export default class PollList extends React.Component {
	constructor(props) {
		super(props);
	}

	getPollList() {
		const listItems = this.props.polls.map((poll, i) => {
			return (
				<div className='poll-list-item' key={'poll-' + i}>
					<a href={'/poll/' + poll._id}>{poll.name}</a>
				</div>
			);
		});

        return listItems;
	}

	render() {
		return (
			<div className='poll-list'>
				{this.getPollList()}
			</div>
		);
	}
}