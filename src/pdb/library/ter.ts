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
  rawData?: string;
};

export default class Ter extends PDBPrimitive {
  private id: string;

  serialNumber?: number;
  residueName?: string;
  chainIdentifier?: string;
  residueSequenceNumber?: number;
  codeForInsertionsOfResidue?: string;

  constructor(args: TerArgs) {
    super();
    this.id = args.id;
    if (args.rawData) {
      this.parse(args.rawData);
    }
  }

  getId(): string {
    return this.id;
  }

  getType(): string {
    return PDBEnums.Ter;
  }

  parse(rawData: string): void {
    this.serialNumber = new Snippet(rawData, 7, 11).toInteger();
    this.residueName = new Snippet(rawData, 18, 20).toCharacter();
    this.chainIdentifier = new Snippet(rawData, 22, 22).toCharacter();
    this.residueSequenceNumber = new Snippet(rawData, 23, 26).toInteger();
    this.codeForInsertionsOfResidue = new Snippet(
      rawData,
      27,
      27
    ).toCharacter();
  }
}
