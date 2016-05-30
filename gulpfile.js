'use strict';

module.exports = function(gulp) {
  const ngrok = require('ngrok');

  gulp.task('expose-ngrok', (cb) => {
    ngrok.connect({
      proto: 'http',
      addr: 4001,
      authtoken: '3L1LGcAsmCrRjU9LjQ9JG_3wfT3zGc4KJRss8FxyTd2'
    }, function (err, url) {
      if (err) {
        console.log(err);
        cb(err);
      }
      else {
        console.log('ngrok started => ', url);
      }
    });
  });
};