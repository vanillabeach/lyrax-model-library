"use strict";
/**
 * Class to hold the parsed structure of a given PDB file.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const anisou_1 = require("./library/anisou");
const atom_1 = require("./library/atom");
const conect_1 = require("./library/conect");
const helix_1 = require("./library/helix");
const hetatm_1 = require("./library/hetatm");
const sheet_1 = require("./library/sheet");
const ssbond_1 = require("./library/ssbond");
const snippet_1 = require("./snippet");
const pdb_element_1 = require("./pdb_element");
const defaultSettings = {
    strictMode: false,
    maxLineLength: 80,
};
class Structure {
    constructor(rawPdbData, userSettings) {
        this.entries = [];
        this.settings = defaultSettings;
        this.rawPdbData = rawPdbData;
        this.entries = this.parse(this.rawPdbData);
        if (userSettings !== undefined) {
            this.settings = Object.assign(this.settings, userSettings);
        }
    }
    getEntries() {
        return this.entries;
    }
    getRawPdbData() {
        return this.rawPdbData;
    }
    parse(textFile) {
        const lines = textFile.split('\n');
        const result = [];
        const { strictMode, maxLineLength } = this.settings;
        lines.forEach((line) => {
            // Handle empty lines
            if (line.trim().length === 0) {
                return;
            }
            // "Strict mode" settings.
            if (strictMode === true) {
                if (line.length > maxLineLength) {
                    throw Error(`PDB file contains line with length greater than ${maxLineLength}.`);
                }
            }
            const entryType = new snippet_1.default(line, 1, 6).toCharacter().toUpperCase();
            switch (entryType) {
                case pdb_element_1.PDBEnums.Anisou:
                    result.push(new anisou_1.default({ rawData: line }));
                    break;
                case pdb_element_1.PDBEnums.Atom:
                    result.push(new atom_1.default({ rawData: line }));
                    break;
                case pdb_element_1.PDBEnums.Conect:
                    result.push(new conect_1.default({ rawData: line }));
                    break;
                case pdb_element_1.PDBEnums.Helix:
                    result.push(new helix_1.default({ rawData: line }));
                    break;
                case pdb_element_1.PDBEnums.HetAtm:
                    result.push(new hetatm_1.default({ rawData: line }));
                    break;
                case pdb_element_1.PDBEnums.Sheet:
                    result.push(new sheet_1.default({ rawData: line }));
                    break;
                case pdb_element_1.PDBEnums.SSBond:
                    result.push(new ssbond_1.default({ rawData: line }));
                    break;
                default:
                    break;
            }
        });
        return result;
    }
}
exports.default = Structure;
