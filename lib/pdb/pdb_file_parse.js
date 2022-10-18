"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTextFile = void 0;
const anisou_1 = require("./library/anisou");
const atom_1 = require("./library/atom");
const conect_1 = require("./library/conect");
const helix_1 = require("./library/helix");
const hetatm_1 = require("./library/hetatm");
const sheet_1 = require("./library/sheet");
const ssbond_1 = require("./library/ssbond");
const ter_1 = require("./library/ter");
const snippet_1 = require("./snippet");
const pdb_element_1 = require("./pdb_element");
function parseTextFile(textFile, settings, namespace) {
    const lines = textFile.split("\n");
    const result = [];
    const { maxLineLength, strictMode } = settings;
    lines.forEach((line, index) => {
        // Handle empty lines
        if (line.trim().length === 0) {
            return;
        }
        // "Strict mode" settings.
        if (strictMode === true) {
            if (line.length > maxLineLength) {
                throw Error(`Strict mode : PDB file contains line with length greater than ${maxLineLength}.`);
            }
        }
        const entryType = snippet_1.default.getSnippetType(line);
        const keyPrefix = namespace ? `${namespace}_` : ``;
        const key = `${keyPrefix}pdb_${index}${entryType}`;
        const args = { id: key, rawData: line };
        switch (entryType) {
            case pdb_element_1.PDBEnums.Anisou:
                result.push(anisou_1.default.fromPDBFileEntry(args));
                break;
            case pdb_element_1.PDBEnums.Atom:
                result.push(atom_1.default.fromPDBFileEntry(args));
                break;
            case pdb_element_1.PDBEnums.Conect:
                result.push(conect_1.default.fromPDBFileEntry(args));
                break;
            case pdb_element_1.PDBEnums.Helix:
                result.push(helix_1.default.fromPDBFileEntry(args));
                break;
            case pdb_element_1.PDBEnums.HetAtm:
                result.push(hetatm_1.default.fromPDBFileEntry(args));
                break;
            case pdb_element_1.PDBEnums.Sheet:
                result.push(sheet_1.default.fromPDBFileEntry(args));
                break;
            case pdb_element_1.PDBEnums.SSBond:
                result.push(ssbond_1.default.fromPDBFileEntry(args));
                break;
            case pdb_element_1.PDBEnums.Ter:
                result.push(ter_1.default.fromPDBFileEntry(args));
                break;
            default:
                break;
        }
    });
    return result;
}
exports.parseTextFile = parseTextFile;
