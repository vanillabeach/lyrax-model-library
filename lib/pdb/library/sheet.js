"use strict";
/**
 * The SHEET record indicates the location, sense (anti-parallel, etc.) and
 * registration with respect to the previous strand in the sheet (if any) \
 * of each strand in the model. One record per strand.
 *
 * Definitions can be found at https://bit.ly/3ptKnTu
 */
Object.defineProperty(exports, "__esModule", { value: true });
const pdb_element_1 = require("../pdb_element");
const pdb_primitive_1 = require("../pdb_primitive");
const snippet_1 = require("../snippet");
class Sheet extends pdb_primitive_1.default {
    constructor(args) {
        super();
        this.id = args.id;
        this.strandNumber = args.strandNumber;
        this.identifier = args.identifier;
        this.numberOfStrands = args.numberOfStrands;
        this.initialResidueName = args.initialResidueName;
        this.firstChainIdentifier = args.firstChainIdentifier;
        this.firstResidueSequenceNumber = args.firstResidueSequenceNumber;
        this.firstCodeForInsertionsOfResidues =
            args.firstCodeForInsertionsOfResidues;
        this.firstTerminalResidueName = args.firstTerminalResidueName;
        this.secondChainIdentifier = args.secondChainIdentifier;
        this.secondResidueSequenceNumber = args.secondResidueSequenceNumber;
        this.secondCodeForInsertionsOfResidues =
            args.secondCodeForInsertionsOfResidues;
        this.strandSenseWithRespectToPrevious =
            args.strandSenseWithRespectToPrevious;
        this.firstAtomName = args.firstAtomName;
        this.firstAtomResidueName = args.firstAtomResidueName;
        this.firstAtomChainIdentifier = args.firstAtomChainIdentifier;
        this.firstAtomResidueSequenceNumber = args.firstAtomResidueSequenceNumber;
        this.firstAtomCodeForInsertionsOfResidue =
            args.firstAtomCodeForInsertionsOfResidue;
        this.secondAtomName = args.secondAtomName;
        this.secondAtomResidueName = args.secondAtomResidueName;
        this.secondAtomChainIdentifier = args.secondAtomChainIdentifier;
        this.secondAtomResidueSequenceNumber = args.secondAtomResidueSequenceNumber;
        this.secondAtomCodeForInsertionsOfResidue =
            args.secondAtomCodeForInsertionsOfResidue;
    }
    static fromPDBFileEntry(args) {
        const { rawData, id } = args;
        return new Sheet({
            id: id,
            strandNumber: new snippet_1.default(rawData, 8, 10).toInteger(),
            identifier: new snippet_1.default(rawData, 12, 14).toCharacter(),
            numberOfStrands: new snippet_1.default(rawData, 15, 16).toInteger(),
            initialResidueName: new snippet_1.default(rawData, 18, 20).toCharacter(),
            firstChainIdentifier: new snippet_1.default(rawData, 22, 22).toCharacter(),
            firstResidueSequenceNumber: new snippet_1.default(rawData, 23, 26).toInteger(),
            firstCodeForInsertionsOfResidues: new snippet_1.default(rawData, 27, 27).toCharacter(),
            firstTerminalResidueName: new snippet_1.default(rawData, 29, 31).toCharacter(),
            secondChainIdentifier: new snippet_1.default(rawData, 33, 33).toCharacter(),
            secondResidueSequenceNumber: new snippet_1.default(rawData, 34, 37).toInteger(),
            secondCodeForInsertionsOfResidues: new snippet_1.default(rawData, 38, 38).toCharacter(),
            strandSenseWithRespectToPrevious: new snippet_1.default(rawData, 39, 40).toInteger(),
            firstAtomName: new snippet_1.default(rawData, 42, 45).toCharacter(),
            firstAtomResidueName: new snippet_1.default(rawData, 46, 48).toCharacter(),
            firstAtomChainIdentifier: new snippet_1.default(rawData, 50, 50).toCharacter(),
            firstAtomResidueSequenceNumber: new snippet_1.default(rawData, 51, 54).toInteger(),
            firstAtomCodeForInsertionsOfResidue: new snippet_1.default(rawData, 55, 55).toCharacter(),
            secondAtomName: new snippet_1.default(rawData, 57, 60).toCharacter(),
            secondAtomResidueName: new snippet_1.default(rawData, 61, 63).toCharacter(),
            secondAtomChainIdentifier: new snippet_1.default(rawData, 65, 65).toCharacter(),
            secondAtomResidueSequenceNumber: new snippet_1.default(rawData, 66, 69).toInteger(),
            secondAtomCodeForInsertionsOfResidue: new snippet_1.default(rawData, 70, 70).toCharacter(),
        });
    }
    getId() {
        return this.id;
    }
    getType() {
        return Sheet.type;
    }
}
exports.default = Sheet;
Sheet.type = pdb_element_1.PDBEnums.Sheet;
