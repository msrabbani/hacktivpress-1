var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var articlesSchema = new Schema({
  title:      String,
  content:    String,
  category:   String,
  author:     { type: Schema.Types.ObjectId, ref: 'users' },
  user_name:  String,
  created_at: Date,
  updated_at: Date
});

var Articles = mongoose.model('articles', articlesSchema);

module.exports = Articles;
