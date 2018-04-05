import regeneratorRuntime from "regenerator-runtime" // eslint-disable-line
import { Component } from "preact"
import * as Vibrant from "node-vibrant"
import styled from "styled-components"
import { lighten, darken } from "polished"
import { memoize } from "../../../../../lib"

const Backdrop = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    display: block;
    filter: opacity(100) contrast(150%);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-image: url(${({ img }) => `${img}`});
    will-change: opacity;
    transition: filter 1s;
  }
`
const extractColor = async url => {
  if (!url) return [8, 28, 37]
  let img = new Image()
  img.src = `${url}?${new Date().getTime()}`
  img.setAttribute(`crossOrigin`, ``)
  const extracted = await Vibrant.from(img)
  const palette = await extracted.getPalette()
  return palette.Vibrant.getRgb() || palette.Muted.getRgb()
}

const cachedColor = memoize(extractColor)

const Gradient = styled.div`
  background-image: radial-gradient(
    circle at 20% 50%,
    ${({ color }) => `
        ${darken(0.3, `rgba(${color}, 0.9)`)} 0%,
        ${lighten(0.1, `rgba(${color}, 0.8)`)} 100%
      `}
  );
`

export class Overlay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bg: props.bg ? props.bg : null,
      color: [8, 28, 37]
    }
  }

  async componentDidMount() {
    const color = await cachedColor(this.state.bg)
      .then(c => c.map(x => parseInt(x, 10)))
    this.setState({
      color: color || [8, 28, 37]
    })
  }

  render({ children }, { bg, color }) {
    return (
      <Backdrop img={bg}>
        <Gradient color={color}>{children}</Gradient>
      </Backdrop>
    )
  }
}
