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
        this.id = args.id;
        this.serialNumber = args.serialNumber;
        this.firstResidueName = args.firstResidueName;
        this.firstChainIdentifier = args.firstChainIdentifier;
        this.firstResidueSequenceNumber = args.firstResidueSequenceNumber;
        this.firstCodeForInsertionsOfResidues =
            args.firstCodeForInsertionsOfResidues;
        this.secondResidueName = args.secondResidueName;
        this.secondChainIdentifier = args.secondChainIdentifier;
        this.secondResidueSequenceNumber = args.secondResidueSequenceNumber;
        this.secondCodeForInsertionsOfResidues =
            args.secondCodeForInsertionsOfResidues;
        this.symmetryOperatorForFirstResidue = args.symmetryOperatorForFirstResidue;
        this.symmetryoperatorForSecondResidue =
            args.symmetryoperatorForSecondResidue;
        this.lengthOfDisulfideBond = args.lengthOfDisulfideBond;
    }
    static fromPDBFileEntry(args) {
        const { rawData, id } = args;
        return new SSBond({
            id: id,
            serialNumber: new snippet_1.default(rawData, 8, 10).toInteger(),
            firstResidueName: new snippet_1.default(rawData, 12, 14).toCharacter(),
            firstChainIdentifier: new snippet_1.default(rawData, 16, 16).toCharacter(),
            firstResidueSequenceNumber: new snippet_1.default(rawData, 18, 21).toInteger(),
            firstCodeForInsertionsOfResidues: new snippet_1.default(rawData, 22, 22).toCharacter(),
            secondResidueName: new snippet_1.default(rawData, 26, 28).toCharacter(),
            secondChainIdentifier: new snippet_1.default(rawData, 30, 30).toCharacter(),
            secondResidueSequenceNumber: new snippet_1.default(rawData, 32, 35).toInteger(),
            secondCodeForInsertionsOfResidues: new snippet_1.default(rawData, 36, 36).toCharacter(),
            symmetryOperatorForFirstResidue: new snippet_1.default(rawData, 60, 65).toInteger(),
            symmetryoperatorForSecondResidue: new snippet_1.default(rawData, 67, 72).toInteger(),
            lengthOfDisulfideBond: new snippet_1.default(rawData, 74, 78).toReal(),
        });
    }
    getType() {
        return SSBond.type;
    }
}
exports.default = SSBond;
SSBond.type = pdb_element_1.PDBEnums.SSBond;
