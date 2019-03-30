"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const line_1 = require("@geo/line");
function main(msg) {
    console.log("main", msg);
    const point1 = { x: 15, y: 23 };
    console.log("length", line_1.getLength({ from: point1, to: { x: 14, y: 11 } }));
}
main("here");
// @ts-ignore
const qwe = {
    qwe: 1,
    ddd: 1,
    eewe: 1,
};
// @ts-ignore
// prettier-ignore
const ignored = {
    // tslint:disable-next-line
    "qwe": 1,
    ddd: 1,
    // tslint:disable-next-line
    eewe: 1,
};
//# sourceMappingURL=main.js.map