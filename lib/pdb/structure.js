"use strict";
/**
 * Class to hold the parsed structure of a given PDB file.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var anisou_1 = require("./library/anisou");
var atom_1 = require("./library/atom");
var conect_1 = require("./library/conect");
var helix_1 = require("./library/helix");
var hetatm_1 = require("./library/hetatm");
var sheet_1 = require("./library/sheet");
var snippet_1 = require("./snippet");
var pdb_element_1 = require("./pdb_element");
var Structure = /** @class */ (function () {
    function Structure(rawPdbData) {
        this.entries = [];
        this.rawPdbData = rawPdbData;
        this.entries = this.parse(this.rawPdbData);
    }
    Structure.prototype.getEntries = function () {
        return this.entries;
    };
    Structure.prototype.getRawPdbData = function () {
        return this.rawPdbData;
    };
    Structure.prototype.parse = function (textFile) {
        var lines = textFile.split('\n');
        var result = [];
        lines.forEach(function (line) {
            var entryType = new snippet_1.default(line, 1, 6).toCharacter().toUpperCase();
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
                    result.push(new sheet_1.default({ rawData: line }));
                    break;
                default:
                    break;
            }
        });
        return result;
    };
    return Structure;
}());
exports.default = Structure;
