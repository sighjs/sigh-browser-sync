var glob, babel, write, pipeline, debounce, mocha

module.exports = function(pipelines) {
  pipelines['source:js'] = [
    glob({ basePath: 'src' }, '*.js'),
    babel({ modules: 'common' }),
    write({ clobber: '!(test)' }, 'lib')
  ]

  pipelines['test:js'] = [
    glob({ basePath: 'src/test' }, '*.js', 'plugin/*.js'),
    babel({ modules: 'common' }),
    write({ clobber: true }, 'lib/test')
  ]

  pipelines.alias.build = ['test:js', 'source:js']

  pipelines['tests:run'] = [
    pipeline('source:js', 'test:js'),
    debounce(700),
    pipeline({ activate: true }, 'mocha')
  ]

  pipelines.explicit.mocha = [ mocha({ files: 'lib/test/**/*.spec.js' }) ]
}
