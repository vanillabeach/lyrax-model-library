"use strict";
/**
 * Atomic coordinate record containing the X,Y,Z orthogonal Å coordinates
 * for atoms in nonstandard residues. Nonstandard residues include inhibitors,
 * cofactors, ions, and solvent.
 *
 * The only functional difference from ATOM records is that HETATM residues
 * are by default not connected to other residues. Note that water residues
 * should be in HETATM records.
 *
 * Definitions can be found at https://bit.ly/3BIPnv1
 */
Object.defineProperty(exports, "__esModule", { value: true });
const atom_1 = require("./atom");
const pdb_element_1 = require("../pdb_element");
class HetAtm extends atom_1.default {
    getType() {
        return HetAtm.type;
    }
}
exports.default = HetAtm;
HetAtm.type = pdb_element_1.PDBEnums.HetAtm;
