require('dotenv').config();
const Users = require('../models/users_model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;

function signIn(req, res){
  console.log(req.body.username);
  console.log(req.body.password);
  Users.findOne({username : req.body.username}, function(err, user){
    if(err){
      res.json({err})
    } else {
      if(!user){
        console.log('failed');
        res.send('user not found');
      }
      else if(bcrypt.compareSync(req.body.password, user.password)){
        let token = jwt.sign({username: user.username, userid: user._id}, secret, {expiresIn:'1h'})
        console.log('success');
        res.send({token: token, user_id: user._id, user_name: user.name});
      } else {
        console.log('failed');
        res.send('wrong password');
      }
    }
  })
}

function getAll(req, res) {
  Users.find().populate('articles_id')
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
  Users.findById(req.params.id).populate('articles_id')
  .exec(function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Found the following record:");
    console.log(result);
    res.send(result);
  });
}

function signUp(req, res) {
  let hash = bcrypt.hashSync(req.body.password, 8);

  Users.create({
    name:         req.body.name,
    username:     req.body.username,
    email:        req.body.email,
    password:     hash,
    articles_id:  req.body.articles_id,
    created_at:   new Date()
  }, function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Insert:");
    console.log(result);
    res.send(result);
  });
}

function deleteUser(req, res) {
  Users.remove({
    '_id': req.params.id
  }, function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Delete:");
    console.log(result);
    res.send(result);
  });
}

function updateUser(req, res) {
  let hash;
  if (req.body.password) {
    hash = bcrypt.hashSync(req.body.password, 8);
  }

  Users.find({
    _id: req.params.id
  }, function(err, user) {
    if (!hash) {
      hash = user[0].password
    }
    Users.update({
      _id: user[0]._id
    }, {
      $set: {
        name:         req.body.name || user[0].name,
        username:     req.body.username || user[0].username,
        email:        req.body.email || user[0]._email,
        password:     hash || user[0].password,
        articles_id:  req.body.articles_id || user[0].articles_id,
        updated_at:   new Date()
      }
    }, (err, result) => {
      if (err) return res.send(err.message)
        res.send(result);
    });
  });
}

module.exports = {
  signIn, getAll, getSingle, signUp, deleteUser, updateUser
}
