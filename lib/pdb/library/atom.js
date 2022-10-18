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
        this.id = args.id;
        this.serialNumber = args.serialNumber;
        this.name = args.name;
        this.alternateLocationIndicator = args.alternateLocationIndicator;
        this.residueName = args.residueName;
        this.chainIdentifier = args.chainIdentifier;
        this.residueSequenceNumber = args.residueSequenceNumber;
        this.codeForInsertionsOfResidue = args.codeForInsertionsOfResidue;
        this.xOrthogonalCoordinate = args.xOrthogonalCoordinate;
        this.yOrthogonalCoordinate = args.yOrthogonalCoordinate;
        this.zOrthogonalCoordinate = args.zOrthogonalCoordinate;
        this.occupancy = args.occupancy;
        this.temperatureFactor = args.temperatureFactor;
        this.segmentIdentifier = args.segmentIdentifier;
        this.elementSymbol = args.elementSymbol;
        this.charge = args.charge;
    }
    static fromPDBFileEntry(args) {
        const { rawData, id } = args;
        return new Atom({
            id: id,
            serialNumber: new snippet_1.default(rawData, 7, 11).toInteger(),
            name: new snippet_1.default(rawData, 13, 16).toCharacter(),
            alternateLocationIndicator: new snippet_1.default(rawData, 17, 17).toCharacter(),
            residueName: new snippet_1.default(rawData, 18, 20).toCharacter(),
            chainIdentifier: new snippet_1.default(rawData, 22, 22).toCharacter(),
            residueSequenceNumber: new snippet_1.default(rawData, 23, 26).toInteger(),
            codeForInsertionsOfResidue: new snippet_1.default(rawData, 27, 27).toCharacter(),
            xOrthogonalCoordinate: new snippet_1.default(rawData, 31, 38).toReal(),
            yOrthogonalCoordinate: new snippet_1.default(rawData, 39, 46).toReal(),
            zOrthogonalCoordinate: new snippet_1.default(rawData, 47, 54).toReal(),
            temperatureFactor: new snippet_1.default(rawData, 61, 66).toReal(),
            segmentIdentifier: new snippet_1.default(rawData, 73, 76).toCharacter(),
            elementSymbol: new snippet_1.default(rawData, 77, 78).toCharacter(),
            charge: new snippet_1.default(rawData, 79, 80).toCharacter(),
        });
    }
    getCapitalizedName() {
        const entry = this.elementSymbol ? this.elementSymbol : this.name;
        return (0, text_1.capitalize)(entry.toLowerCase());
    }
    getCPKColor() {
        const key = this.getElement().toLowerCase();
        return cpk_1.CPK[key] ? cpk_1.CPK[key] : cpk_1.CPK['DEFAULT'];
    }
    getElement() {
        const entry = this.elementSymbol ? this.elementSymbol : this.name;
        return entry.replace(/[^a-zA-Z]+/g, '');
    }
    getType() {
        return Atom.type;
    }
}
exports.default = Atom;
Atom.type = pdb_element_1.PDBEnums.Atom;
