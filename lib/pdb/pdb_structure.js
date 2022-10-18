"use strict";
/**
 * Class to hold the parsed structure of a given PDB file.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const pdb_file_parse_1 = require("./pdb_file_parse");
class PDBStructure {
    constructor(entries) {
        this.entries = [];
        this.entries = entries;
    }
    static fromPDBTextFile(rawPdbData, userSettings = {}, namespace) {
        const defaultSettings = {
            strictMode: false,
            maxLineLength: 80,
        };
        const entries = (0, pdb_file_parse_1.parseTextFile)(rawPdbData, Object.assign(Object.assign({}, defaultSettings), userSettings), namespace);
        return new PDBStructure(entries);
    }
    getEntries() {
        return this.entries;
    }
}
exports.default = PDBStructure;
