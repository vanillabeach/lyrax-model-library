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
        this.id = args.id;
        this.name = args.name;
        this.alternateLocation = args.alternateLocation;
        this.residueName = args.residueName;
        this.chainIdentifier = args.chainIdentifier;
        this.residueSequenceNumber = args.residueSequenceNumber;
        this.insertionCode = args.insertionCode;
        this.u_0_0 = args.u_0_0;
        this.u_1_1 = args.u_1_1;
        this.u_2_2 = args.u_2_2;
        this.u_0_1 = args.u_0_1;
        this.u_0_2 = args.u_0_2;
        this.u_1_2 = args.u_1_2;
        this.element = args.element;
        this.charge = args.charge;
    }
    static fromPDBFileEntry(args) {
        const { rawData, id } = args;
        return new Anisou({
            id: id,
            serialNumber: new snippet_1.default(rawData, 7, 11).toInteger(),
            name: new snippet_1.default(rawData, 13, 16).toCharacter(),
            alternateLocation: new snippet_1.default(rawData, 17, 17).toCharacter(),
            residueName: new snippet_1.default(rawData, 18, 20).toCharacter(),
            chainIdentifier: new snippet_1.default(rawData, 22, 22).toCharacter(),
            residueSequenceNumber: new snippet_1.default(rawData, 23, 26).toInteger(),
            insertionCode: new snippet_1.default(rawData, 27, 27).toCharacter(),
            u_0_0: new snippet_1.default(rawData, 29, 35).toInteger(),
            u_1_1: new snippet_1.default(rawData, 36, 42).toInteger(),
            u_2_2: new snippet_1.default(rawData, 43, 49).toInteger(),
            u_0_1: new snippet_1.default(rawData, 50, 56).toInteger(),
            u_0_2: new snippet_1.default(rawData, 57, 63).toInteger(),
            u_1_2: new snippet_1.default(rawData, 64, 70).toInteger(),
            element: new snippet_1.default(rawData, 77, 78).toCharacter(),
            charge: new snippet_1.default(rawData, 79, 80).toCharacter(),
        });
    }
    getType() {
        return Anisou.type;
    }
}
exports.default = Anisou;
Anisou.type = pdb_element_1.PDBEnums.Anisou;
