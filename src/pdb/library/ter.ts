/**
 * Indicates the end of a chain of residues. For example, a hemoglobin molecule
 * consists of four subunit chains that are not connected. TER indicates the end
 * of a chain and prevents the display of a connection to the next chain.
 *
 * Definitions can be found at https://bit.ly/3BIPnv1
 */

import { PDBEnums } from '../pdb_element';
import PDBPrimitive from '../pdb_primitive';
import Snippet from '../snippet';

export type TerArgs = {
  id: string;
  serialNumber?: number;
  residueName?: string;
  chainIdentifier?: string;
  residueSequenceNumber?: number;
  codeForInsertionsOfResidue?: string;
};

export default class Ter extends PDBPrimitive {
  // Specific to Lyra
  readonly id: string;

  // Specific to the PDB specification
  readonly serialNumber?: number;
  readonly residueName?: string;
  readonly chainIdentifier?: string;
  readonly residueSequenceNumber?: number;
  readonly codeForInsertionsOfResidue?: string;

  constructor(args: TerArgs) {
    super();

    this.id = args.id;
    this.serialNumber = args.serialNumber;
    this.residueName = args.residueName;
    this.chainIdentifier = args.chainIdentifier;
    this.residueSequenceNumber = args.residueSequenceNumber;
    this.codeForInsertionsOfResidue = args.codeForInsertionsOfResidue;
  }

  static fromPDBFileEntry(args: { id: string; rawData: string }): Ter {
    const { rawData, id } = args;

    return new Ter({
      id: id,
      serialNumber: new Snippet(rawData, 7, 11).toInteger(),
      residueName: new Snippet(rawData, 18, 20).toCharacter(),
      chainIdentifier: new Snippet(rawData, 22, 22).toCharacter(),
      residueSequenceNumber: new Snippet(rawData, 23, 26).toInteger(),
      codeForInsertionsOfResidue: new Snippet(rawData, 27, 27).toCharacter(),
    });
  }

  getType(): string {
    return PDBEnums.Ter;
  }
}
