


getNextScheduledBus = function(busId) {

		var options = {
		  host: 'http://xmlopen.rejseplanen.dk/bin/rest.exe',
		  method: 'POST'
		};


		if (busId == 14) {
			options.path = 'departureBoard?id=751418200&date=07.02.17&time=12:50&format=json';
		} else (busId == 15) {
			options.path = 'departureBoard?id=751431400&date=07.02.17&time=12:50&format=json';
		}



		var req = http.request(options, function(res) {
			  console.log('STATUS: ' + res.statusCode);
			  console.log('HEADERS: ' + JSON.stringify(res.headers));
			  res.setEncoding('utf8');
			  res.on('data', function (chunk) {
			    console.log('BODY: ' + chunk);
			  });
			});

		req.on('error', function(e) {
		  console.log('problem with request: ' + e.message);
		});
		req.write('data\n');
		reg.end();




	
}