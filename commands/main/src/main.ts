import { getLength } from "@geo/line"
import { Point } from "@geo/point"

function main(msg: string) {
	console.log("main", msg)
	const point1: Point = { x: 15, y: 23 }
	console.log("length", getLength({ from: point1, to: { x: 14, y: 11 } }))
}

main("here")

// @ts-ignore
const qwe = {
	qwe: 1,
	ddd: 1,
	eewe: 1,
}

// @ts-ignore
// prettier-ignore
const ignored = {
// tslint:disable-next-line
	"qwe": 1,
	ddd: 1,
// tslint:disable-next-line
	eewe: 1,
}
