#!/usr/local/bin/node

var request = require('request'), 
_ = require('underscore'), 
github = 'https://api.github.com/zen', 
options = {}, 
msg = [];

function init() {
  request(github, options, function(err, res, body) {
    if (err) { return; }

    if (res.statusCode !== 200 || res.headers['x-ratelimit-remaining'] < 1) {
      process.stderr.write("To many tries. Try tomorrow again.\n");
      process.exit(0);
    }

    if (!_.include(msg, body)) {
      msg.push(body);
      console.log(body);
    }
    init();
  });
}

if (process.argv.length > 2) {
  var arg = process.argv[2];
  
  if (!/^[^\-][\-a-zA-Z0-9]+$/.test(arg)) {
    console.log('Usage:\n  ./zen.js\nor\n ./zen.js GithubUsername');
    return;
  };

  process.stderr.write("Password: ");
  process.stdin.resume();

  process.stdin.on("data", function(chunk) {
    process.stdin.pause(); 
    options = {
      "auth": {
        "user": arg,
        "pass": chunk.toString().slice(0, -1)
      }
    };
    init();
  });

  return;
}

init();