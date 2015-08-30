var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());

app.numbers = [ {number:"2", resource:""},
				{number:"3", resource:""},
				{number:"3", resource:""},
				{number:'4', resource:''},
				{number:'4', resource:''},
				{number:'5', resource:''},
				{number:'5', resource:''},
				{number:'6', resource:''},
				{number:'6', resource:''},
				{number:'8', resource:''},
				{number:'8', resource:''},
				{number:'9', resource:''},
				{number:'9', resource:''},
				{number:'10', resource:''},
				{number:'10', resource:''},
				{number:'11', resource:''},
				{number:'11', resource:''},
				{number:'12', resource:''}];

app.resources = [ {type:"wheat", count:0},
				  {type:"brick", count:0},
				  {type:"ore", count:0},
				  {type:"sheep", count:0},
				  {type:"wood", count:0}];

app.allocateResources = function (){
	app.numbers.forEach( function (number) {
		var allocated = false;
		while(!allocated){
			var rand = Math.floor(Math.random() * app.resources.length);
			console.log("rand is ", rand);
			if(app.resources[rand].type == "wheat"){
				if(app.resources[rand].count < 4) {
					app.resources[rand].count++;
					number.resource="wheat";
					allocated = true;
				}
			}
			else if(app.resources[rand].type == "brick" && app.resources[rand].count < 3){
				number.resource="brick";
				app.resources[rand].count++;
				allocated = true;
			}
			else if(app.resources[rand].type == "ore" && app.resources[rand].count < 3) {
				number.resource = "ore";
				app.resources[rand].count++;
				allocated = true;
			}
			else if(app.resources[rand].type == "sheep" && app.resources[rand].count < 4) {
				number.resource = "sheep";
				app.resources[rand].count++;
				allocated = true;
			}
			else if(app.resources[rand].type == "wood" && app.resources[rand].count < 4) {
				number.resource = "wood";
				app.resources[rand].count++;
				allocated = true;
			}
		}
	})
	
}

app.get('/', function (req, res) {
	app.allocateResources();
	res.send(app.numbers);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});