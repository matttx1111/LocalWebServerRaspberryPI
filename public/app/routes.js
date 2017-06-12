

var Bus = require('./models/bus');
var tripPlannerService = require('./services/TripPlannerService');
    module.exports = function(app) { 

	// Server routes
	app.get('/api/', function (req, res) {
		res.json({ message: 'hooray! welcome to our api!' });
	});
	
	app.get('/api/getNextScheduledBus', function (req, res) {
		var message;
		tripPlannerService.getNextScheduledBus(14,function(result){
			message = result;
			res.json({ message: message });
		});
	});


	//sample get
	app.get('/api/bus', function(req, res) {

	Bus.find(function(err,busses) {
			//retrieve
			if(err) {
				res.send(err);
			}
			
			res.json(busses); //Return all busses
		});	
	});

	app.post('/api/createBus' , function(req,res) {
	
	
		var bus = new Bus({number: 14});
//		bus.number = req.body.number
		bus.save(function(err) {
			if(err)
				res.send(err);

			res.json({message: 'Bus Created!'});
		});
	});	


	}

