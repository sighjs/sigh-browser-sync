# sigh-browser-sync

[![build status](https://circleci.com/gh/ohjames/sigh-browser-sync.png)](https://circleci.com/gh/ohjames/sigh-browser-sync)

Sigh plugin for...

## Example

`npm install --save-dev sigh-browser-sync` then add something like this to your `sigh.js`:

```javascript
var liveReload, glob, write, sass

module.exports = function(pipelines) {
  pipelines['build:source'] = [
    var globOpts = { basePath: 'src' }

    merge(
      [ glob(globOpts, '**/*.js'), babel() ]
      [ glob(globOpts, '**/*.scss') sass() ]
    )
    write('build/assets'),
    liveReload(),
  ]
}
```

Now whenever the `write` operation passes on written files, if they are `css` files the `browser-sync` server will update your page, if they are `.js` files the page will reload.

An optional object can be passed as the first argument to `liveReload` and will be passed on to the live-reload server's `init` call, a list of supported arguments can be [found here](http://www.browsersync.io/docs/options/).

The client javascript will require code like this to connect to the `live-reload` server (replacing 3000 with whichever port is being used):

```javascript
var js = document.createElement('script')
js.src = '//' + (location.host || 'localhost').split(':')[0] + ':3000/browser-sync/browser-sync-client.2.8.0.js'
document.body.appendChild(js)
```

## TODO
 * Write tests.
 * Options for altering file paths, e.g. stripping/adding directories from/to path.