"use strict";
/**
 * The ANISOU records present the anisotropic temperature factors.
 *
 * Definitions can be found at https://bit.ly/3A2ZCHX
 */
Object.defineProperty(exports, "__esModule", { value: true });
const pdb_element_1 = require("../pdb_element");
const pdb_primitive_1 = require("../pdb_primitive");
const snippet_1 = require("../snippet");
class Anisou extends pdb_primitive_1.default {
    constructor(args) {
        super();
        if (args.rawData) {
            this.parse(args.rawData);
        }
    }
    getType() {
        return pdb_element_1.PDBEnums.Anisou;
    }
    parse(rawData) {
        this.serialNumber = new snippet_1.default(rawData, 7, 11).toInteger();
        this.name = new snippet_1.default(rawData, 13, 16).toCharacter();
        this.alternateLocation = new snippet_1.default(rawData, 17, 17).toCharacter();
        this.residueName = new snippet_1.default(rawData, 18, 20).toCharacter();
        this.chainIdentifier = new snippet_1.default(rawData, 22, 22).toCharacter();
        this.residueSequenceNumber = new snippet_1.default(rawData, 23, 26).toInteger();
        this.insertionCode = new snippet_1.default(rawData, 27, 27).toCharacter();
        this.u_0_0 = new snippet_1.default(rawData, 29, 35).toInteger();
        this.u_1_1 = new snippet_1.default(rawData, 36, 42).toInteger();
        this.u_2_2 = new snippet_1.default(rawData, 43, 49).toInteger();
        this.u_0_1 = new snippet_1.default(rawData, 50, 56).toInteger();
        this.u_0_2 = new snippet_1.default(rawData, 57, 63).toInteger();
        this.u_2_2 = new snippet_1.default(rawData, 64, 70).toInteger();
        this.element = new snippet_1.default(rawData, 77, 78).toCharacter();
        this.charge = new snippet_1.default(rawData, 79, 80).toCharacter();
    }
}
exports.default = Anisou;
