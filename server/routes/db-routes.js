(function(){

    // My modules
    const Poll = require("../models/poll");
    const User = require("../models/user");

    module.exports = function(app) {
        
        // Gets a list of all polls
        app.get('/db/polls', (req, res) => {
            Poll.find((err, polls) => {
                if (err) {
                    console.error('Error finding polls.', err);
                    res.status(503).end();
                } else {
                    res.json(polls);
                }
            })
        });

        // Gets polls for the authenticated user
        app.get('/db/polls/user', (req, res) => {
            if (req.isAuthenticated()) {
                Poll.find({ 'created': req.user._id }, (err, polls) => {
                    if (err) {
                        console.error('Error finding polls by user.', req.user._id, err);
                        res.status(503).end();
                    } else {
                        res.json(polls);
                    }
                });
            } else {
                res.status(401).end();
            }
        });

        // Gets a poll where the poll ID is :poll
        app.get('/db/poll/:poll', (req, res) => {
            Poll.findById(decodeURIComponent(req.params.poll), (err, poll) => {
                if (err) {
                    console.error('Error finding poll by ID.', req.params.poll, err)
                    res.status(503).end();
                } else if (poll) {
                    res.json(poll.toObject());
                } else {
                    res.status(404).end();
                }
            });
        });

        // Gets the username if authenticated.  Otherwise an empty string.
        app.get('/db/user', (req, res) => {
            if (req.isAuthenticated()) {
                User.findById(req.user._id, (err, user) => {
                    if (err) {
                        console.error('Error finding user by ID.', req.user._id, err)
                        res.status(503).end();
                    } else if (user) {
                        res.json({name: user.facebook.name, id: user._id});
                    } else {
                        res.status(404).end();
                    }
                });
            } else {
                res.end();
            }
        });
        
        // Creates a new poll
        app.post('/db/poll/', (req, res) => {
            if (req.isAuthenticated()) {
                const newPoll = new Poll();

                newPoll.name = req.body.name;
                newPoll.options = req.body.options;
                newPoll.created = req.user._id;
                newPoll.votes = [];

                newPoll.save((err, poll) => {
                    if (err) {
                        console.error('Error creating new poll.', req.body, err)
                        res.status(503).end();
                    } else {
                        res.status(200).json(poll.toJSON());
                    }
                });
            } else {
                res.status(401).end();
            }
        });

        // Updates a poll with the sent vote
        app.post('/db/poll/:poll/vote', (req, res) => {
            Poll.findById(decodeURIComponent(req.params.poll), (err, poll) => {
                if (err) {
                    console.error('Error finding poll.', req.params.poll, err)
                    res.status(503).end();
                } else if (poll) {
                    if (poll.options.length > req.body.vote) {
                        poll.votes = poll.votes.concat([req.body.vote]);
                        poll.save((err) => {
                            if (err) {
                                console.error('Error adding vote to poll.', req.params.poll, req.body.vote, err)
                                res.status(503).end();
                            } else {
                                res.status(200).end();
                            }
                        });
                    } else {
                        res.status(503).end();
                    }
                } else {
                    res.status(404).end();
                }
            });
        });

        // Updates a poll with the sent option
        app.post('/db/poll/:poll/option', (req, res) => {
            if (req.isAuthenticated()) {
                Poll.findById(decodeURIComponent(req.params.poll), (err, poll) => {
                    if (err) {
                        console.error('Error finding poll.', req.params.poll, err)
                        res.status(503).end();
                    } else if (poll) {
                        if (!poll.options.includes(req.body.option)) {
                            poll.options = poll.options.concat([req.body.option]);
                            poll.save((err) => {
                                if (err) {
                                    console.error('Error adding option to poll.', req.params.poll, req.body.option, err)
                                    res.status(503).end();
                                } else {
                                    res.status(200).end();
                                }
                            });
                        } else {
                            res.status(503).end();
                        }
                    } else {
                        res.status(404).end();
                    }
                });
            } else {
                res.status(401).end();
            }
        });

        // Updates a poll with the sent vote
        app.post('/db/poll/:poll/delete', (req, res) => {
            if (req.isAuthenticated()) {
                Poll.findById(decodeURIComponent(req.params.poll), (err, poll) => {
                    if (err) {
                        console.error('Error finding poll.', req.params.poll, err)
                        res.status(503).end();
                    } else if (poll) {
                        if (poll.created == req.user._id) {
                            poll.remove((err) => {
                                if (err) {
                                    console.error('Error deleting poll.', poll, err);
                                    res.status(503).end();
                                } else {
                                    res.status(200).send('/mypolls');
                                }
                            });
                        } else {
                            res.status(503).end();
                        }
                    } else {
                        res.status(404).end();
                    }
                });
            } else {
                res.status(401).end();
            }
        });
        
    };

})();