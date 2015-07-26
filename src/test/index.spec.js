import _ from 'lodash'
import Promise from 'bluebird'
import ProcessPool from 'process-pool'
import { Bacon } from 'sigh-core'
import Event from 'sigh/lib/Event'

import browserSync from '../'

require('source-map-support').install()
require('chai').should()

describe('sigh-browser-sync', () => {
  var procPool
  beforeEach(() => { procPool = new ProcessPool() })
  afterEach(() => { procPool.destroy() })

  xit('TODO: should do something', () => {
    // TODO:
  })
})
