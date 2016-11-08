var helpers = require('./helpers.js'),
	config = require('./config.js'),
	fs = require('fs');

exports.version = '0.1.0';

exports.generate = function(req, res){
    
    var page = req.params.page_name;

	fs.readFile('../static/'+ page + '/' + page + '.html', function(err, contents){
		if(err) {
			helpers.send_failure(res, helpers.http_code_for_error(err), err);
			return;
		}

		contents = contents.toString('utf8');
		res.writeHead(200, { "Content-Type" : "text/html" });
		res.end(contents);
	})
}