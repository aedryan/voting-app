(function(){

    const mongoose = require('mongoose');

    const pollSchema = mongoose.Schema({
        name: String,
        options: Array,
        votes: Array,
        created: String
    });

    module.exports = mongoose.model('Poll', pollSchema);

})();