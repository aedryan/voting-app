import React from 'react';

export default class NewPoll extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			options: []
		}
	}

	handleName(e) {
		const value = e.target.value;

		this.setState(() => {
			return {
				name: value
			}
		});
	}

	handleOptions(e) {
		const value = e.target.value.split(',').map((text) => {
			return text.trim();
		});

		this.setState(() => {
			return {
				options: value
			}
		});
	}

	submitForm(e) {
		e.preventDefault();
		
		if (this.state.name.length > 0 && this.state.options.length > 0) {
			$.post('/db/poll', {name: this.state.name, options: this.state.options}, (data) => {
				window.location = "/poll/" + data._id;
			}).fail((err) => {
				console.error('Something went wrong creating the new poll.', err)
			});
		}
	}

	render() {
		return (
			<div id="new-poll" className='well'>
				<form className='clearfix' onSubmit={this.submitForm.bind(this)}>
					<div className='form-group'>
						<label htmlFor='vote-options'>Name</label>
						<input type='text' className='form-control' onChange={this.handleName.bind(this)} required />
					</div>
					<div className='form-group'>
						<label htmlFor='vote-options'>Options</label>
						<textarea className='form-control' onChange={this.handleOptions.bind(this)} required></textarea>
						<small>Options should be comma separated</small>
					</div>
					<div className='form-group button-form-group'>
						<button type='submit' className='btn btn-primary'>Submit</button>
					</div>
				</form>
			</div>
		);
	}
}