var frames = require('./frames');
var characters = require('./characters');

var initialized = false;

function nyan(options = {}) {
  var {
    colors,
    pure,
    stream } = options;

  if(!initialized) {
    frames.forEach(function(e, i) {
      frames[i] = e.slice(17, 50);
      if(colors) {
        frames[i] = frames[i].map(function(row) {
          return row.split('').map(function(c) {
            // I don't think any characters are unaccounted for but you never know
            if(characters.draw[c]) {
              return characters.draw[c] + (pure ? ' ' : c) + characters.end;
            } else {
              return c;
            }
          }).join('');
        });
      }
      frames[i] = frames[i].join('\n');
    });
  }

  initialized = true;
  
  var i = 0;
  return setInterval(function() {
    stream.write('\033[0f');
    //process.stdout.write('\033[2J');
    stream.write(frames[i]);
    i = (i+1)%frames.length;
  }, 29);
}

nyan.pipe = function(stream) {
  return nyan({ colors: true, pure: true, stream });
};

module.exports = nyan;
