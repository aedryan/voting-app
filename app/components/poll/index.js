import React from 'react';
import DeleteModal from 'components/poll/deleteModal';
import VotePieChart from 'components/poll/votePieChart';

export default class Poll extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            poll: {},
            vote: null,
            selectedValue: '',
            custom: false,
            banner: false,
            bannerMessage: null,
            bannerStatus: null,
            modalOpen: false
        };
        this.state = this.initialState;
    }

    componentDidMount() {
        this.getPoll();
    }

    popupHandler(e) {
        const value = e.target.value;

        this.setState(() => {
            let custom = value === 'custom';

            return {
                vote: custom || value.length === 0 ? null : value,
                selectedValue: value,
                custom: custom,
                banner: false
            }
        });
    }

    textHandler(e) {
        const value = e.target.value.trim();
        const exists = this.state.poll.options.includes(value);

        this.setState(() => {
            return {
                vote: value.length > 0 ? value : null,
                banner: exists,
                bannerMessage: 'Duplicate options are not allowed.',
                bannerStatus: 'danger'
            }
        });
    }

    deleteHandler() {
        this.setState(() => {
            return {
                modalOpen: true
            }
        })
    }

    getPoll() {
        const pollId = window.location.pathname.replace(/\/poll\//, '');

        $.get('/db/poll/' + pollId, (data) => {
            if (data) {
                this.setState(() => {
                    const state = this.initialState;
                    state.poll = data;
                    return state;
                });
            }
        }).fail(() => {
            this.setState(() => {
                return {
                    banner: true,
                    bannerMessage: 'Poll not found',
                    bannerStatus: 'danger'
                }
            });
        });
    }

    submitForm(e) {
        e.preventDefault();

        if (this.state.vote && !this.state.banner) {
            if (this.state.custom) {
                $.post('/db/poll/' + this.state.poll._id + '/option', {option: this.state.vote}).fail((err) => {
                    console.error('Something went wrong adding the new option.', err)
                }).done(() => {
                    this.postVote();  
                });
            } else {
                this.postVote();
            }
        } else {
            this.setState(() => {
                return {
                    banner: true,
                    bannerMessage: 'All fields must be completed before submitting.',
                    bannerStatus: 'danger'
                }
            });
        }
    }

    postVote() {
        const foundOption = this.state.poll.options.findIndex((val) => { return val === this.state.vote; });
        const vote = this.state.custom ? this.state.poll.options.length : foundOption
        
        $.post('/db/poll/' + this.state.poll._id + '/vote', {vote: vote}).fail((err) => {
            console.error('Something went wrong adding the new vote.', err)
        }).done(() => {
            this.getPoll();  
        });
    }

    showBanner() {
        if (this.state.banner) {
            return (
                <p className={"bg-" + this.state.bannerStatus}>
                    <span>{this.state.bannerMessage}</span>
                </p>
            )
        } else {
            return null;
        }
    }

    listOptions() {
        let authOption = this.props.loggedIn ? [<option value='custom' key={'vote-custom'}>New Option</option>] : [];
        let options = this.state.poll.options || [];
        options = options.map((option, i) => 
            <option value={option} data-index={i} key={'vote-' + i}>{option}</option>
        ).concat(authOption);

        return (
            <select id='vote-options' className='form-control' value={this.state.selectedValue} onChange={this.popupHandler.bind(this)} required>
                <option value=''>Choose an option</option>
                {options}
            </select>
        )
    }

    showCustomText() {
        if (this.state.custom) {
            return (
                <div className='form-group'>
                    <label htmlFor='vote-custom'>New Option</label>
                    <input type='text' className='form-control' name='vote-custom' onChange={this.textHandler.bind(this)} required />
                </div>
            )
        } else {
            return null;
        }
    }
    
    showButtons() {
        const href = encodeURIComponent(window.location.href);
        const shareURL = 'http://www.facebook.com/dialog/send?app_id=305124166585583&link=' + href + '&redirect_uri=' + href;
        const shareButton = this.props.loggedIn ? (<a className='btn btn-primary' id='facebook-share' href={shareURL}>Share on Facebook</a>) : null;
        const deleteButton = this.props.loggedIn && this.props.userID === this.state.poll.created ? (<button type="button" className='btn btn-danger' onClick={this.deleteHandler.bind(this)}>Delete Poll</button>) : null;
        
        return (
            <div>
                {shareButton}
                <div className='form-group button-form-group'>
                    {deleteButton}
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </div>
        )
    }

    cancelModal() {
        this.setState(() => {
            return {
                modalOpen: false
            }
        });
    }

    deleteAction() {
        $.post('/db/poll/' + this.state.poll._id + '/delete', (data) => {
            this.setState(() => {
                return {
                    poll: {},
                    banner: true,
                    bannerMessage: 'Poll successfully deleted.',
                    bannerStatus: 'success'
                }
            });
        }).fail(() => {
            this.setState(() => {
                return {
                    banner: true,
                    bannerMessage: 'Something went wrong deleting the poll.',
                    bannerStatus: 'danger'
                }
            });
        });
    }

    showPollData() {
        const modalStyles = {
            content: { 
                bottom: 'auto' 
            }, 
            overlay: { 
                backgroundColor: 'rgba(0,0,0,0.5)'
            }
        };

        if (this.state.poll.name) {
            return (
                <div>
                    <h2>{this.state.poll.name}</h2>
                    <form onSubmit={this.submitForm.bind(this)} className='clearfix'>
                        <div className='form-group'>
                            <label htmlFor='vote-options'>Options</label>
                            {this.listOptions()}
                        </div>
                        {this.showCustomText()}
                        {this.showButtons()}
                    </form>
                    <DeleteModal style={modalStyles} isOpen={this.state.modalOpen} cancelAction={this.cancelModal.bind(this)} deleteAction={this.deleteAction.bind(this)} />
                </div>
            );
        } else {
            return null;
        }
    }

	render() {        
		return (
			<div id="poll">
                <div className='well'>
                    {this.showBanner()}
                    {this.showPollData()}
                </div>
                <VotePieChart poll={this.state.poll} width='250' height='250' />
            </div>
		);
	}
}