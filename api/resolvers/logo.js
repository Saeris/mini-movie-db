import { images } from "./endpoints"

export const file = parent => parent
export const original = parent => `${images}original${parent}`
export const custom = (parent, { dimensions }) => `${images}${dimensions}${parent}`

export const icon = parent => `${images}w45${parent}`
export const tiny = parent => `${images}w92${parent}`
export const small = parent => `${images}w154${parent}`
export const medium = parent => `${images}w185${parent}`
export const large = parent => `${images}w300${parent}`
export const huge = parent => `${images}w500${parent}`
