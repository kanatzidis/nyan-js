## Nyan

Pure js library for rendering nyan frames

#### Usage

```
var opts = {
  colors: true, // use colors instead of just raw ascii
  pure: true, // use solid colors only
  stream: { write: data => console.log(data) } // an object with a write function to do something with the frames.
};

require('nyan-js')(opts);
```

You can also "pipe" it to a stream (pipe is pretend, nyan isn't a real stream). The frames will be written to the given stream:

```
var nyan = require('nyan-js');

// it returns an interval rather than the stream you pass it
var interval = nyan.pipe(process.stdout);
clearInterval(interval);
```

Try running the examples in `./examples`:

```
node examples/basic.js --colors
node examples/basic.js --colors --pure
```

#### Credits

Nyan Cat ASCII frames lifted from [https://github.com/vtsvang/nyancat-telnet-node](https://github.com/vtsvang/nyancat-telnet-node)
