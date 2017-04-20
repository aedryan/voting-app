(function(){

  const path = require("path");
  const express = require('express');
  const compress = require('compression');
  const app = express();
  const db = require("./database");

  app.set('port', (process.env.PORT || 5000));
  app.use(compress());
  app.use('/favicon.ico', express.static("favicon.ico"));
  app.use(express.static('public/'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
  });

  // Start server
  app.listen(app.get('port'), () => {
    console.log("App is running", app.get('port'));
  });

})();