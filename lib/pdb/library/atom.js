"use strict";
/**
 * Atomic coordinate record containing the X,Y,Z orthogonal Å coordinates for
 * atoms in standard residues (amino acids and nucleic acids).
 *
 * Definitions can be found at https://bit.ly/3BIPnv1
 */
Object.defineProperty(exports, "__esModule", { value: true });
const text_1 = require("../../utils/text");
const cpk_1 = require("../../standards/cpk");
const pdb_element_1 = require("../pdb_element");
const pdb_primitive_1 = require("../pdb_primitive");
const snippet_1 = require("../snippet");
class Atom extends pdb_primitive_1.default {
    constructor(args) {
        super();
        if (args.rawData) {
            this.parse(args.rawData);
        }
    }
    getCapitalizedName() {
        const entry = this.elementSymbol ? this.elementSymbol : this.name;
        return (0, text_1.capitalize)(entry.toLowerCase());
    }
    getElement() {
        const entry = this.elementSymbol ? this.elementSymbol : this.name;
        return entry.replace(/[^a-zA-Z]+/g, '');
    }
    getCPKColor() {
        const key = this.getElement().toLowerCase();
        return cpk_1.CPK[key] ? cpk_1.CPK[key] : cpk_1.CPK['DEFAULT'];
    }
    getType() {
        return pdb_element_1.PDBEnums.Atom;
    }
    parse(rawData) {
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
    }
}
exports.default = Atom;
