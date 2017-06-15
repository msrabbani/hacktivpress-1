var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var usersSchema = new Schema({
  name:         String,
  username:     String,
  email:        String,
  password:     String,
  articles_id:  [{ type: Schema.Types.ObjectId, ref: 'articles' }],
  created_at:   Date,
  updated_at:   Date
});

var Users = mongoose.model('users', usersSchema);

module.exports = Users;
