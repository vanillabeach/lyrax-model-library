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
        if (args.rawData) {
            this.parse(args.rawData);
        }
    }
    getType() {
        return pdb_element_1.PDBEnums.Helix;
    }
    parse(rawData) {
        this.serialNumber = new snippet_1.default(rawData, 8, 10).toInteger();
        this.identifier = new snippet_1.default(rawData, 12, 14).toCharacter();
        this.initialResidueName = new snippet_1.default(rawData, 16, 18).toCharacter();
        this.firstChainIdentifier = new snippet_1.default(rawData, 20, 20).toCharacter();
        this.firstResidueSequenceNumber = new snippet_1.default(rawData, 22, 25).toInteger();
        this.firstCodeForInsertionsOfResidues = new snippet_1.default(rawData, 26, 26).toCharacter();
        this.firstTerminalResidueName = new snippet_1.default(rawData, 28, 30).toCharacter();
        this.secondChainIdentifier = new snippet_1.default(rawData, 32, 32).toCharacter();
        this.secondResidueSequenceNumber = new snippet_1.default(rawData, 34, 37).toInteger();
        this.secondCodeForInsertionsOfResidues = new snippet_1.default(rawData, 38, 38).toCharacter();
        this.typeOfHelix = new snippet_1.default(rawData, 39, 40).toInteger();
        this.comment = new snippet_1.default(rawData, 41, 70).toCharacter();
        this.lengthOfHelix = new snippet_1.default(rawData, 72, 76).toCharacter();
    }
}
exports.default = Helix;
