import test from 'ava'
import { initLogger } from 'renovate/lib/logger'
import cache from 'renovate/lib/workers/global/cache'
import { migrateAndValidate } from 'renovate/lib/config/migrate-validate'

initLogger()
cache.init()

let pkg = null
let renovateConfig = null

test.beforeEach(() => {
  pkg = require('./package.json')
  renovateConfig = pkg['renovate-config']
})

test.afterEach(() => {
  pkg = null
  renovateConfig = null
})

test('package.json has "renovate-config"', t => {
  t.truthy(renovateConfig)
})
;['default', 'js-app', 'js-lib'].forEach(name => {
  test(`"renovate-config" has "${name}"`, t => {
    t.truthy(renovateConfig[name])
  })

  test(`"${name}" is valid`, async t => {
    const config = renovateConfig[name]
    const { errors, warnings } = await migrateAndValidate({}, config)
    t.deepEqual(errors, [])
    t.deepEqual(warnings, [])
  })
})
