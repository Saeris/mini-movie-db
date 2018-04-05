import { images } from "./endpoints"

export const file = parent => parent
export const original = parent => `${images}original${parent}`
export const custom = (parent, { dimensions }) => `${images}${dimensions}${parent}`

export const small = parent => `${images}w92${parent}`
export const medium = parent => `${images}w185${parent}`
export const large = parent => `${images}w300${parent}`
