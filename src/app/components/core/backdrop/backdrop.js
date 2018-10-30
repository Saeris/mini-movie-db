import styled from "preact-emotion"
import { lighten, darken } from "polished"

const Backdrop = styled(`div`)`
  width: 100%;
  position: relative;
  z-index: 1;

  &:before {
    content: '';
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
const Gradient = styled(`div`)`
  background-image: radial-gradient(
    circle at 20% 50%,
    ${({ color }) => `
        ${darken(0.3, `rgba(${color}, 0.9)`)} 0%,
        ${lighten(0.1, `rgba(${color}, 0.8)`)} 100%
      `}
  );
`

export const Overlay = ({ bg = ``, color = [8, 28, 37], children }) => {
  console.log(color)
  return (
    <Backdrop img={bg}>
      <Gradient color={color}>{children}</Gradient>
    </Backdrop>
  )
}
