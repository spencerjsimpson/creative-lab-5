var express = require('express');
var fs = require('fs');
var router = express.Router();

var homeless = [
	{
		"first" : "Josh",
		"last" : "Lucero",
		"age" : "19",
		"money" : {
			"food" : "$9.80",
			"clothing" : "$15.46",
			"housing" : "$51.24",
			"travel" : "$2.50"
		}
	},
	{
		"first" : "Roger",
		"last" : "Collins",
		"age" : "58",
		"money" : {
			"food" : "$9.80",
			"clothing" : "$15.46",
			"housing" : "$51.24",
			"travel" : "$2.50"
		}
	},
	{
		"first" : "Jameson",
		"last" : "Beck",
		"age" : "28",
		"money" : {
			"food" : "$9.80",
			"clothing" : "$15.46",
			"housing" : "$51.24",
			"travel" : "$2.50"
		}
	},
	{
		"first" : "Cory",
		"last" : "Johnson",
		"age" : "42",
		"money" : {
			"food" : "$9.80",
			"clothing" : "$15.46",
			"housing" : "$51.24",
			"travel" : "$2.50"
		}
	},
	{
		"first" : "Richard",
		"last" : "Cook",
		"age" : "52",
		"money" : {
			"food" : "$9.80",
			"clothing" : "$15.46",
			"housing" : "$51.24",
			"travel" : "$2.50"
		}
	},
	{
		"first" : "Kieth",
		"last" : "Smith",
		"age" : "35",
		"money" : {
			"food" : "$9.80",
			"clothing" : "$15.46",
			"housing" : "$51.24",
			"travel" : "$2.50"
		}
	},
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root: 'public' });
});

// Get account creating page
router.get('/create-account', function(req, res, next) {
	console.log("entered GET create-accounts");
  res.sendFile('create-account.html', { root: 'public' });
});

router.get('/donate', function(req, res, next) {
	console.log("entered GET donate");
  res.sendFile('donate.html', { root: 'public' });
});

// SEND USER DATA TO PAGE
router.post('/create-account', function(req, res, next) {
	console.log("entered POST create-accounts");
	var user = req.body;
	console.log(user); //should be the same as console.log(req.body);
	// how do I save a user to a json file?
	res.sendStatus(200);
});

router.get('/cory', function(req,res,next) {
  res.sendFile('cory.html', { root: 'public' });
});

router.get('/kieth', function(req,res,next) {
  res.sendFile('kieth.html', { root: 'public' });
});

router.get('/jameson', function(req,res,next) {
  res.sendFile('jameson.html', { root: 'public' });
});

router.get('/richard', function(req,res,next) {
  res.sendFile('richard.html', { root: 'public' });
});

router.get('/roger', function(req,res,next) {
  res.sendFile('roger.html', { root: 'public' });
});

router.get('/josh', function(req,res,next) {
  res.sendFile('josh.html', { root: 'public' });
});


module.exports = router;
