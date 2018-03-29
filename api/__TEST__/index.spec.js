import test from 'ava'
import { graphqlHandler } from '../'

test(`graphqlHandler`, t => {
  t.is((typeof graphqlHandler), `function`, ` should be a function`)
})
