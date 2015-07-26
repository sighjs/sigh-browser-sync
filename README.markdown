# sigh-browser-sync

[![build status](https://circleci.com/gh/sighjs/sigh-browser-sync.png)](https://circleci.com/gh/sighjs/sigh-browser-sync)

Sigh plugin for...

## Example

`npm install --save-dev sigh-browser-sync` then add something like this to your `sigh.js`:

```javascript
var browserSync, glob, write, sass

module.exports = function(pipelines) {
  var globOpts = { basePath: 'src' }

  pipelines['build:source'] = [
    merge(
      [ glob(globOpts, '**/*.js'), babel() ],
      [ glob(globOpts, '**/*.scss') sass() ]
    ),
    write('build/assets'),
    browserSync(),
  ]
}
```

Now whenever the `write` operation passes on written files, if they are `css` files the `browser-sync` server will update your page, if they are `.js` files the page will reload.

An optional object can be passed as the first argument to `browserSync` and will be passed on to the live-reload server's `init` call, a list of supported arguments can be [found here](http://www.browsersync.io/docs/options/).

The client javascript will require code like this to connect to the `live-reload` server (replacing 3000 with whichever port is being used):

```javascript
var js = document.createElement('script')
js.src = '//' + (location.host || 'localhost').split(':')[0] + ':3000/browser-sync/browser-sync-client.js'
document.body.appendChild(js)
```

## TODO
 * Write tests.
 * Options for altering file paths, e.g. stripping/adding directories from/to path.
