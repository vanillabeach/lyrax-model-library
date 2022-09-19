"use strict";
/**
 * Indicates the end of a chain of residues. For example, a hemoglobin molecule
 * consists of four subunit chains that are not connected. TER indicates the end
 * of a chain and prevents the display of a connection to the next chain.
 *
 * Definitions can be found at https://bit.ly/3BIPnv1
 */
Object.defineProperty(exports, "__esModule", { value: true });
const pdb_element_1 = require("../pdb_element");
const pdb_primitive_1 = require("../pdb_primitive");
const snippet_1 = require("../snippet");
class Ter extends pdb_primitive_1.default {
    constructor(args) {
        super();
        if (args.rawData) {
            this.parse(args.rawData);
        }
    }
    getType() {
        return pdb_element_1.PDBEnums.Ter;
    }
    parse(rawData) {
        this.serialNumber = new snippet_1.default(rawData, 7, 11).toInteger();
        this.residueName = new snippet_1.default(rawData, 18, 20).toCharacter();
        this.chainIdentifier = new snippet_1.default(rawData, 22, 22).toCharacter();
        this.residueSequenceNumber = new snippet_1.default(rawData, 23, 26).toInteger();
        this.codeForInsertionsOfResidue = new snippet_1.default(rawData, 27, 27).toCharacter();
    }
}
exports.default = Ter;
Ter.type = 'TER';
