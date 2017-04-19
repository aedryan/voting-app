(function(){

    const express = require('express');
    const app = express();
    const db = require("./database");

    app.set('port', (process.env.PORT || 5000));
    app.use('/favicon.ico', express.static("favicon.ico"));
    app.use(express.static('public/'));

    app.get('/', (req, res) => {
        res.sendFile('/index.html');
    });

    // Start server
    app.listen(app.get('port'), () => {
        console.log("App is running", app.get('port'));
    });

})();