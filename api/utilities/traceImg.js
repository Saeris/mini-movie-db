import * as Vibrant from 'node-vibrant'
import { Potrace } from "potrace"
import SVGO from "svgo"

const encodeSvgDataUri = svg => `data:image/svg+xml,${encodeURIComponent(svg)
  .replace(/%0A/g, ``)
  .replace(/%20/g, ` `)
  .replace(/%3D/g, `=`)
  .replace(/%3A/g, `:`)
  .replace(/%2F/g, `/`)
  .replace(/%22/g, `'`)}`

const optimizeSvg = async svg => {
  const svgo = new SVGO({ multipass: true, floatPrecision: 0 })
  const { data } = await svgo.optimize(svg)
  return data
}

const extractMostProminentColor = async img => {
  const extracted = await Vibrant.from(img)
  const palette = await extracted.getPalette()
  let mostProminentColor = ``
  let highestPopulation = 0
  let color = ``
  let population = 0

  Object.keys(palette).forEach(key => {
    if (palette[key] === null) return

    color = palette[key].getHex()
    population = palette[key].getPopulation()

    if (population > highestPopulation) {
      mostProminentColor = color
      highestPopulation = population
    }
  })
  return mostProminentColor
}

const traceSvg = url => new Promise(async (resolve, reject) => {
  const trace = new Potrace({
    turnPolicy: Potrace.TURNPOLICY_MINORITY,
    turdSize: 100,
    alphaMax: 1,
    optCurve: true,
    optTolerance: 0.2,
    threshold: Potrace.THRESHOLD_AUTO,
    blackOnWhite: true,
    background: Potrace.COLOR_TRANSPARENT,
    color: await extractMostProminentColor(url)
  })
  trace.loadImage(url, err => (err ? reject(err) : resolve(trace.getSVG()))) //eslint-disable-line
})

export const traceImg = async url => {
  const svg = await traceSvg(`https:${url}`)
  const optimized = await optimizeSvg(svg)
  return encodeSvgDataUri(optimized)
}
