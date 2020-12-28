var callgetdistict = require("./getdistinct.js");
Parse.Cloud.define("UniqueQuery", callgetdistict.getdistinctFunction);

Parse.Cloud.define('hello', function(req, res) {
  return 'Hi';
});
