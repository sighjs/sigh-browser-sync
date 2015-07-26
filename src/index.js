import _ from 'lodash'
import Promise from 'bluebird'
import { Bacon } from 'sigh-core'

function browserSyncTask(opts) {
  var bs = require('browser-sync').create()
  bs.init(opts)

  return function(paths) {
    bs.reload(paths)
    // must return something due to process-pool limitation, it will be ignored
    return {}
  }
}

export default function(op, opts = {}) {
  var pooledProc = op.procPool.prepare(browserSyncTask, opts, { module, processLimit: 1 })

  return op.stream.flatMapLatest(events => {
    var paths = events.map(event => event.projectPath)

    return Bacon.fromPromise(pooledProc(paths).thenReturn(events))
  })
}
