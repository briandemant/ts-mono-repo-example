import { getDistance } from "@geo/point"
import { Line } from "./line"

export const getLength = (line: Line): number => getDistance(line.from, line.to)
