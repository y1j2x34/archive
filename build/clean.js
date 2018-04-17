var fs = require('fs');
var glob = require('glob');

glob('dist/**/*.*', function(err, matches) {
    matches.forEach(function(filepath) {
        fs.unlinkSync(filepath);
    });
    fs.rmdirSync('dist/');
});
