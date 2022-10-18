"use strict";
/**
 * The CONECT records specify connectivity between atoms for which coordinates are
 * supplied. The connectivity is described using the atom serial number as shown in
 * the entry. CONECT records are mandatory for HET groups (excluding water) and for
 * other bonds not specified in the standard residue connectivity table. These records
 * are generated automatically.
 *
 * Definitions can be found at https://bit.ly/3P0OWPu
 */
Object.defineProperty(exports, "__esModule", { value: true });
const pdb_element_1 = require("../pdb_element");
const pdb_primitive_1 = require("../pdb_primitive");
const snippet_1 = require("../snippet");
class Conect extends pdb_primitive_1.default {
    constructor(args) {
        super();
        this.id = args.id;
        this.serial1 = args.serial1;
        this.serial2 = args.serial2;
        this.serial3 = args.serial3;
        this.serial4 = args.serial4;
        this.serial5 = args.serial5;
    }
    static fromPDBFileEntry(args) {
        const { rawData, id } = args;
        return new Conect({
            id: id,
            serial1: new snippet_1.default(rawData, 7, 11).toInteger(),
            serial2: new snippet_1.default(rawData, 12, 16).toInteger(),
            serial3: new snippet_1.default(rawData, 17, 21).toInteger(),
            serial4: new snippet_1.default(rawData, 22, 26).toInteger(),
            serial5: new snippet_1.default(rawData, 27, 31).toInteger(),
        });
    }
    getType() {
        return Conect.type;
    }
}
exports.default = Conect;
Conect.type = pdb_element_1.PDBEnums.Conect;
