import render from 'preact-render-spy'
import { Link } from '../'

describe(`Link component`, () => {
  it(`should be a function`, () => {
    expect(typeof Link).toBe(`function`)
  })

  it(`should render a link`, () => {
    const context = render(<Link/>)
    expect(context.find(`a`).exists()).toBeTruthy()
  })

  it(`should pass down props to the rendered anchor tag`, () => {
    const context = render(<Link src="https://www.github.com"/>)
    expect(context.find(`a`).attr(`src`)).toBe(`https://www.github.com`)
  })

  it(`should have attributes target="_blank" and rel="noopener" when external is set`, () => {
    const context = render(<Link external src="https://www.github.com"/>)
    const el = context.find(`a`)
    expect(el.attr(`target`)).toBe(`_blank`)
    expect(el.attr(`rel`)).toBe(`noopener`)
  })
})
