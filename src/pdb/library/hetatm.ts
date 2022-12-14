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

import Atom from './atom';
import { PDBEnums } from '../pdb_element';

export default class HetAtm extends Atom {
  static type = PDBEnums.HetAtm;

  getType(): PDBEnums {
    return HetAtm.type;
  }
}
