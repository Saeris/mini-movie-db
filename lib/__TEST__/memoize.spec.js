import { cache, memoize } from '../memoize'

describe(`cache`, () => {
  it(`should be a function`, () => {
    expect(typeof cache).toBe(`function`)
  })
})

describe(`memoize`, () => {
  it(`should be a function`, () => {
    expect(typeof memoize).toBe(`function`)
  })
})
