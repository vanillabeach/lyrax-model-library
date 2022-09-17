"use strict";
/**
 * Atomic coordinate record containing the X,Y,Z orthogonal Å coordinates for
 * atoms in standard residues (amino acids and nucleic acids).
 *
 * Definitions can be found at https://bit.ly/3BIPnv1
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var text_1 = require("../../utils/text");
var cpk_1 = require("../../standards/cpk");
var pdb_element_1 = require("../pdb_element");
var pdb_primitive_1 = require("../pdb_primitive");
var snippet_1 = require("../snippet");
var Atom = /** @class */ (function (_super) {
    __extends(Atom, _super);
    function Atom(args) {
        var _this = _super.call(this) || this;
        if (args.rawData) {
            _this.parse(args.rawData);
        }
        return _this;
    }
    Atom.prototype.getCapitalizedName = function () {
        var entry = this.elementSymbol ? this.elementSymbol : this.name;
        return (0, text_1.capitalize)(entry.toLowerCase());
    };
    Atom.prototype.getElement = function () {
        var entry = this.elementSymbol ? this.elementSymbol : this.name;
        return entry.replace(/[^a-zA-Z]+/g, '');
    };
    Atom.prototype.getCPKColor = function () {
        var key = this.getElement().toLowerCase();
        return cpk_1.CPK[key] ? cpk_1.CPK[key] : cpk_1.CPK['DEFAULT'];
    };
    Atom.prototype.getType = function () {
        return pdb_element_1.PDBEnums.Atom;
    };
    Atom.prototype.parse = function (rawData) {
        this.serialNumber = new snippet_1.default(rawData, 7, 11).toInteger();
        this.name = new snippet_1.default(rawData, 13, 16).toCharacter();
        this.alternateLocationIndicator = new snippet_1.default(rawData, 17, 17).toCharacter();
        this.residueName = new snippet_1.default(rawData, 18, 20).toCharacter();
        this.chainIdentifier = new snippet_1.default(rawData, 22, 22).toCharacter();
        this.residueSequenceNumber = new snippet_1.default(rawData, 23, 26).toInteger();
        this.codeForInsertionsOfResidue = new snippet_1.default(rawData, 27, 27).toCharacter();
        this.xOrthogonalCoordinate = new snippet_1.default(rawData, 31, 38).toReal();
        this.yOrthogonalCoordinate = new snippet_1.default(rawData, 39, 46).toReal();
        this.zOrthogonalCoordinate = new snippet_1.default(rawData, 47, 54).toReal();
        this.occupancy = new snippet_1.default(rawData, 55, 60).toReal();
        this.temperatureFactor = new snippet_1.default(rawData, 61, 66).toReal();
        this.segmentIdentifier = new snippet_1.default(rawData, 73, 76).toCharacter();
        this.elementSymbol = new snippet_1.default(rawData, 77, 78).toCharacter();
        this.charge = new snippet_1.default(rawData, 79, 80).toCharacter();
    };
    return Atom;
}(pdb_primitive_1.default));
exports.default = Atom;
