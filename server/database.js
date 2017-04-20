const dbUrl = process.env.MONGODB_URI
const mongo = require("mongodb").MongoClient;

(function(){

  module.exports = {

    collection: function(str, callback){
      module.exports.connect((db) => {
        db.collection(str, (err, collection) => {
          if (err) {
            throw err;
          } else {
            callback(collection);
          }
        });
      });
    },

    connect: function(callback){
      mongo.connect(dbUrl, (err, db) => {
        if (err) {
          throw err;
        } else {
          callback(db);
        }

        db.close();
      });
    }

  }

})();