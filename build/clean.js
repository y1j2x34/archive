var fs = require('fs');
var glob = require('glob');

if(fs.existsSync('dist/')) {
    glob('dist/**/*.*', function(err, matches) {
        matches.forEach(function(filepath) {
            fs.unlinkSync(filepath);
        });
        fs.rmdirSync('dist/');
    });
}

