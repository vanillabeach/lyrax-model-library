"use strict";
/**
 * The HELIX record indicates the location and type (right-handed alpha, etc.)
 * of helices. One record per helix.
 *
 * Definitions can be found at https://bit.ly/3ptKnTu
 */
Object.defineProperty(exports, "__esModule", { value: true });
const pdb_element_1 = require("../pdb_element");
const pdb_primitive_1 = require("../pdb_primitive");
const snippet_1 = require("../snippet");
class Helix extends pdb_primitive_1.default {
    constructor(args) {
        super();
        this.id = args.id;
        this.serialNumber = args.serialNumber;
        this.identifier = args.identifier;
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
        this.typeOfHelix = args.typeOfHelix;
        this.comment = args.comment;
        this.lengthOfHelix = args.lengthOfHelix;
    }
    static fromPDBFileEntry(args) {
        const { rawData, id } = args;
        return new Helix({
            id: id,
            serialNumber: new snippet_1.default(rawData, 8, 10).toInteger(),
            identifier: new snippet_1.default(rawData, 12, 14).toCharacter(),
            initialResidueName: new snippet_1.default(rawData, 16, 18).toCharacter(),
            firstChainIdentifier: new snippet_1.default(rawData, 20, 20).toCharacter(),
            firstResidueSequenceNumber: new snippet_1.default(rawData, 22, 25).toInteger(),
            firstCodeForInsertionsOfResidues: new snippet_1.default(rawData, 26, 26).toCharacter(),
            firstTerminalResidueName: new snippet_1.default(rawData, 28, 30).toCharacter(),
            secondChainIdentifier: new snippet_1.default(rawData, 32, 32).toCharacter(),
            secondResidueSequenceNumber: new snippet_1.default(rawData, 34, 37).toInteger(),
            secondCodeForInsertionsOfResidues: new snippet_1.default(rawData, 38, 38).toCharacter(),
            typeOfHelix: new snippet_1.default(rawData, 39, 40).toInteger(),
            comment: new snippet_1.default(rawData, 41, 70).toCharacter(),
            lengthOfHelix: new snippet_1.default(rawData, 72, 76).toCharacter(),
        });
    }
    getType() {
        return Helix.type;
    }
}
exports.default = Helix;
Helix.type = pdb_element_1.PDBEnums.Helix;
