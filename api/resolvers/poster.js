import { images } from "./endpoints"
import { traceImg } from "../utilities"

export const file = parent => parent
export const original = parent => `${images}original${parent}`
export const originalSVG = parent => traceImg(`${images}original${parent}`)
export const custom = (parent, { dimensions }) => `${images}${dimensions}${parent}`

export const thumbnail = parent => `${images}w92${parent}`
export const tiny = parent => `${images}w154${parent}`
export const small = parent => `${images}w185${parent}`
export const medium = parent => `${images}w342${parent}`
export const large = parent => `${images}w500${parent}`
export const huge = parent => `${images}w780${parent}`
