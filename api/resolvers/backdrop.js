import { images } from "./endpoints"

export const file = parent => parent
export const original = parent => `${images}original${parent}`
export const custom = (parent, { dimensions }) => `${images}${dimensions}${parent}`

export const small = parent => `${images}w300${parent}`
export const medium = parent => `${images}w780${parent}`
export const large = parent => `${images}w1280${parent}`
