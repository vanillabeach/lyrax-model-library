"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PDBPrimitive = /** @class */ (function () {
    function PDBPrimitive() {
    }
    PDBPrimitive.prototype.getType = function () {
        throw new Error('getType() has not been implemented for this PDB Primitive class.');
    };
    PDBPrimitive.prototype.parse = function (rawData) {
        throw new Error('parse() has not been implemented for this PDB Primitive class.');
    };
    return PDBPrimitive;
}());
exports.default = PDBPrimitive;
