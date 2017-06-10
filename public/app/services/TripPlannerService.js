

module.exports = {

	getNextScheduledBus:  function (busId, callback) {
		var options = {
			host: 'xmlopen.rejseplanen.dk',
			method: 'GET'
			
		};
		var http = require('http');
		//var resultData = 
		if (busId == 14) {
			options.path = '/bin/rest.exe/departureBoard?id=751418200&date=10.06.17&time=12:50&format=json';
		} else if (busId == 15) {
			options.path = '/bin/rest.exe/departureBoard?id=751431400&date=07.02.17&time=12:50&format=json';
		}


		var body = '';
		var parsed;
		var req = http.request(options, function (res) {
			
			console.log('STATUS: ' + res.statusCode);
			console.log('HEADERS: ' + JSON.stringify(res.headers));
 			res.setEncoding('utf8');
			res.on('data', function (chunk) {
				body += chunk;
				console.log('BODY: ' + chunk);
			});

			res.on('end', function() {
				parsed = JSON.parse(body);
				console.log(parsed);
				callback(parsed)
			})
		});

		req.on('error', function (e) {
			console.log('problem with request: ' + e.message);
		});
		req.write('data\n');
		req.end();
	}

};
