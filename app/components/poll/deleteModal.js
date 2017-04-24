import React from 'react';
import Modal from 'react-modal';

export default class DeleteModal extends React.Component {
    constructor(props){
        super(props);
    }

	render() {
		return (
			<Modal id='delete-modal' style={this.props.style} isOpen={this.props.isOpen} contentLabel="Modal">
                <h2>Delete Poll</h2>
                <p>Are you sure you want to delete this poll?</p>
                <p>You cannot undo this action.</p>
                <div className='form-group button-form-group'>
                    <button className='btn btn-default' onClick={this.props.cancelAction}>Cancel</button>
                    <button className='btn btn-danger' onClick={this.props.deleteAction}>Delete</button>
                </div>
            </Modal>
		);
	}
}