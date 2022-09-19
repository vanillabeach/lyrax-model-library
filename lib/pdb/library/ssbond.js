"use strict";
/**
 * The SSBOND record defines disulfide bond linkages between
 * cysteine residues.
 *
 * Definitions can be found at https://bit.ly/3ptKnTu
 */
Object.defineProperty(exports, "__esModule", { value: true });
const pdb_element_1 = require("../pdb_element");
const pdb_primitive_1 = require("../pdb_primitive");
const snippet_1 = require("../snippet");
class SSBond extends pdb_primitive_1.default {
    constructor(args) {
        super();
        if (args.rawData) {
            this.parse(args.rawData);
        }
    }
    getType() {
        return pdb_element_1.PDBEnums.SSBond;
    }
    parse(rawData) {
        this.serialNumber = new snippet_1.default(rawData, 8, 10).toInteger();
        this.firstResidueName = new snippet_1.default(rawData, 12, 14).toCharacter();
        this.firstChainIdentifier = new snippet_1.default(rawData, 16, 16).toCharacter();
        this.firstResidueSequenceNumber = new snippet_1.default(rawData, 18, 21).toInteger();
        this.firstCodeForInsertionsOfResidues = new snippet_1.default(rawData, 22, 22).toCharacter();
        this.secondResidueName = new snippet_1.default(rawData, 26, 28).toCharacter();
        this.secondChainIdentifier = new snippet_1.default(rawData, 30, 30).toCharacter();
        this.secondResidueSequenceNumber = new snippet_1.default(rawData, 32, 35).toInteger();
        this.secondCodeForInsertionsOfResidues = new snippet_1.default(rawData, 36, 36).toCharacter();
        this.symmetryOperatorForFirstResidue = new snippet_1.default(rawData, 60, 65).toInteger();
        this.symmetryoperatorForSecondResidue = new snippet_1.default(rawData, 67, 72).toInteger();
        this.lengthOfDisulfideBond = new snippet_1.default(rawData, 74, 78).toReal();
    }
}
exports.default = SSBond;
