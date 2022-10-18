"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoordinatesIn3D = void 0;
class CoordinatesIn3D {
    constructor(args) {
        this.x = args.x;
        this.y = args.y;
        this.z = args.z;
    }
    static fromArray(array) {
        if (array.length != 3) {
            throw Error('Co-ordinate array must contain exactly 3 entries.');
        }
        return new CoordinatesIn3D({
            x: array[0],
            y: array[1],
            z: array[2],
        });
    }
}
exports.CoordinatesIn3D = CoordinatesIn3D;
