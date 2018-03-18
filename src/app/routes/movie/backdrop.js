import regeneratorRuntime from "regenerator-runtime" // eslint-disable-line
import { Component } from "preact"
import * as Vibrant from "node-vibrant"
import styled from "styled-components"
import { lighten, darken } from "polished"
import { memoize } from "../../utils/memoize"

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
  let img = new Image()
  img.src = url + "?" + new Date().getTime()
  img.setAttribute("crossOrigin", "")
  const colors = await Vibrant.from(img).getPalette()
  return colors.Vibrant.getRgb()
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
      bg: `//image.tmdb.org/t/p/w1400_and_h450_face/${props.bg}`,
      color: [255, 255, 255]
    }
  }

  async componentDidMount() {
    const color = await cachedColor(this.state.bg).then(color =>
      color.map(x => parseInt(x, 10))
    )
    this.setState({
      color: color || [255, 255, 255]
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
