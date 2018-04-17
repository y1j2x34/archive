var fs = require('fs');
var glob = require('glob');

glob('dist/**/*.*', function(err, matches) {
    matches.forEach(function(filepath) {
        fs.unlinkSync(filepath);
    });
    if (fs.existsSync('dist/')) {
        fs.rmdirSync('dist/');
    }
});
