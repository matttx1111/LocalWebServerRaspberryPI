

module.exports = {

	getNextScheduledBus:  function (busId, callback) {
		

		var http = require('http');
		var queryPath = '/bin/rest.exe/';


		if (busId == 14) {
			queryPath += '/bin/rest.exe/departureBoard?id=751418200';
		} else if (busId == 15) {
			queryPath += '/bin/rest.exe/departureBoard?id=751431400';//format=json';
		}
		var now = new Date()
		queryPath += '&date=' + now.getDate() + '.' + (now.getMonth()+1) + '.' + now.getFullYear().toString().slice(2) + '&time=' + now.getHours() + ':' + now.getMinutes();

		//var resultData = 
		
		//Find format
		queryPath += '&format=json'

		var options = {
			host: 'xmlopen.rejseplanen.dk',
			method: 'GET',
			path: queryPath
		};

		

		var body = '';
		var parsed;
		var req = http.request(options, function (res) {
			
			console.log('STATUS: ' + res.statusCode);
			console.log('HEADERS: ' + JSON.stringify(res.headers));
 			res.setEncoding('utf8');
			res.on('data', function (chunk) {
				body += chunk;
			});

			res.on('end', function() {
				parsed = JSON.parse(body);
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
