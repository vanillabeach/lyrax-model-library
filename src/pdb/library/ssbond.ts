/**
 * The SSBOND record defines disulfide bond linkages between
 * cysteine residues.
 *
 * Definitions can be found at https://bit.ly/3ptKnTu
 */

import { PDBEnums } from '../pdb_element';
import PDBPrimitive from '../pdb_primitive';
import Snippet from '../snippet';

export type SSBondArgs = {
  rawData?: string;
};

export default class SSBond extends PDBPrimitive {
  serialNumber?: number;
  firstResidueName?: string;
  firstChainIdentifier?: string;
  firstResidueSequenceNumber?: number;
  firstCodeForInsertionsOfResidues?: string;
  secondResidueName?: string;
  secondChainIdentifier?: string;
  secondResidueSequenceNumber?: number;
  secondCodeForInsertionsOfResidues?: string;
  symmetryOperatorForFirstResidue?: number;
  symmetryoperatorForSecondResidue?: number;
  lengthOfDisulfideBond?: number;

  constructor(args: SSBondArgs) {
    super();
    if (args.rawData) {
      this.parse(args.rawData);
    }
  }

  getType(): string {
    return PDBEnums.SSBond;
  }

  parse(rawData: string): void {
    this.serialNumber = new Snippet(rawData, 8, 10).toInteger();
    this.firstResidueName = new Snippet(rawData, 12, 14).toCharacter();
    this.firstChainIdentifier = new Snippet(rawData, 16, 16).toCharacter();
    this.firstResidueSequenceNumber = new Snippet(rawData, 18, 21).toInteger();
    this.firstCodeForInsertionsOfResidues = new Snippet(
      rawData,
      22,
      22
    ).toCharacter();
    this.secondResidueName = new Snippet(rawData, 26, 28).toCharacter();
    this.secondChainIdentifier = new Snippet(rawData, 30, 30).toCharacter();
    this.secondResidueSequenceNumber = new Snippet(rawData, 32, 35).toInteger();
    this.secondCodeForInsertionsOfResidues = new Snippet(
      rawData,
      36,
      36
    ).toCharacter();
    this.symmetryOperatorForFirstResidue = new Snippet(
      rawData,
      60,
      65
    ).toInteger();
    this.symmetryoperatorForSecondResidue = new Snippet(
      rawData,
      67,
      72
    ).toInteger();
    this.lengthOfDisulfideBond = new Snippet(rawData, 74, 78).toReal();
  }
}
