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
  id: string;
  serial1?: number;
  serial2?: number;
  serial3?: number;
  serial4?: number;
  serial5?: number;
};

export default class Conect extends PDBPrimitive {
  // Specific to Lyra
  readonly id: string;

  // Specific to the PDB specification
  readonly serial1?: number;
  readonly serial2?: number;
  readonly serial3?: number;
  readonly serial4?: number;
  readonly serial5?: number;

  constructor(args: ConectArgs) {
    super();

    this.id = args.id;
    this.serial1 = args.serial1;
    this.serial2 = args.serial2;
    this.serial3 = args.serial3;
    this.serial4 = args.serial4;
    this.serial5 = args.serial5;
  }

  static fromPDBFileEntry(args: { id: string; rawData: string }): Conect {
    const { rawData, id } = args;

    return new Conect({
      id: id,
      serial1: new Snippet(rawData, 7, 11).toInteger(),
      serial2: new Snippet(rawData, 12, 16).toInteger(),
      serial3: new Snippet(rawData, 17, 21).toInteger(),
      serial4: new Snippet(rawData, 22, 26).toInteger(),
      serial5: new Snippet(rawData, 27, 31).toInteger(),
    });
  }

  getType(): string {
    return PDBEnums.Conect;
  }
}
