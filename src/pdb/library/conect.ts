/**
 * The CONECT records specify connectivity between atoms for which coordinates are
 * supplied. The connectivity is described using the atom serial number as shown in
 * the entry. CONECT records are mandatory for HET groups (excluding water) and for
 * other bonds not specified in the standard residue connectivity table. These records
 * are generated automatically.
 *
 * Definitions can be found at https://bit.ly/3P0OWPu
 */

import { PDBEnums } from '../pdb_element';
import PDBPrimitive from '../pdb_primitive';
import Snippet from '../snippet';

export type ConectArgs = {
  rawData?: string;
};

export default class Conect extends PDBPrimitive {
  serial1?: number;
  serial2?: number;
  serial3?: number;
  serial4?: number;
  serial5?: number;

  constructor(args: ConectArgs) {
    super();
    if (args.rawData) {
      this.parse(args.rawData);
    }
  }

  getType(): string {
    return PDBEnums.Conect;
  }

  parse(rawData: string): void {
    this.serial1 = new Snippet(rawData, 7, 11).toInteger();
    this.serial2 = new Snippet(rawData, 12, 16).toInteger();
    this.serial3 = new Snippet(rawData, 17, 21).toInteger();
    this.serial4 = new Snippet(rawData, 22, 26).toInteger();
    this.serial5 = new Snippet(rawData, 27, 31).toInteger();
  }
}
