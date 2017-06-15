const Articles = require('../models/articles_model');
const Users = require('../models/users_model');

function getAll(req, res) {
  Articles.find().populate('author')
    .exec(function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Found the following records:");
    console.log(result);
    res.send(result);
  });
}

function getSingle(req, res) {
  Articles.findById(req.params.id).populate('author')
  .exec(function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Found the following record:");
    console.log(result);
    res.send(result);
  });
}

function createArticle(req, res) {
  Articles.create({
    title:      req.body.title,
    content:    req.body.content,
    category:   req.body.category,
    author:     req.body.author,
    user_name:  req.body.user_name,
    created_at: new Date()
  }, function(err, articles) {
    if (err) {
      res.send(err.message);
    }
    Users.findById(req.body.author, function(err, user) {
      user.articles_id.push(articles._id);
      user.save(function(err) {
        if (err) res.send(err.message);
        console.log("Add Thread Success..");
        res.send(articles);
      });
    });
  });
}

function deleteArticle(req, res) {
  Articles.remove({
    '_id': req.params.id
  }, function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Delete:");
    console.log(result);
  });
  res.send('Delete success');
}

function updateArticle(req, res) {
  Articles.find({
    _id: req.params.id
  }, function(err, article) {
    Articles.update({
      _id: article[0]._id
    }, {
      $set: {
        title:      req.body.title || article[0].title,
        content:    req.body.content || article[0].content,
        category:   req.body.category || article[0].category,
        author:     req.body.author || article[0].author,
        user_name:  req.body.user_name || article[0].user_name,
        updated_at: new Date()
      }
    }, (err, result) => {
      if (err) return res.send(err.message)
        res.send(result);
    });
  });
}

module.exports = {
  getAll, getSingle, createArticle, deleteArticle, updateArticle
}
