"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BondRepresentation = void 0;
var BondRepresentation;
(function (BondRepresentation) {
    BondRepresentation[BondRepresentation["singleColor"] = 0] = "singleColor";
    BondRepresentation[BondRepresentation["splitColor"] = 1] = "splitColor";
})(BondRepresentation = exports.BondRepresentation || (exports.BondRepresentation = {}));
class Bond {
    constructor(args) {
        var _a, _b;
        this.id = args.id;
        this.firstId = args.firstId;
        this.secondId = args.secondId;
        this.settings = args.settings;
        if (((_a = args.settings) === null || _a === void 0 ? void 0 : _a.type) === BondRepresentation.singleColor &&
            ((_b = args.settings) === null || _b === void 0 ? void 0 : _b.colorValue) === undefined) {
            throw Error('You have specified a "single color" value for a bond but have not provided the color.');
        }
    }
}
exports.default = Bond;
