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
  id: string;
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
};

export default class SSBond extends PDBPrimitive {
  // Specific to Lyra
  readonly id: string;

  // Specific to the PDB specification
  readonly serialNumber?: number;
  readonly firstResidueName?: string;
  readonly firstChainIdentifier?: string;
  readonly firstResidueSequenceNumber?: number;
  readonly firstCodeForInsertionsOfResidues?: string;
  readonly secondResidueName?: string;
  readonly secondChainIdentifier?: string;
  readonly secondResidueSequenceNumber?: number;
  readonly secondCodeForInsertionsOfResidues?: string;
  readonly symmetryOperatorForFirstResidue?: number;
  readonly symmetryoperatorForSecondResidue?: number;
  readonly lengthOfDisulfideBond?: number;

  constructor(args: SSBondArgs) {
    super();

    this.id = args.id;
    this.serialNumber = args.serialNumber;
    this.firstResidueName = args.firstResidueName;
    this.firstChainIdentifier = args.firstChainIdentifier;
    this.firstResidueSequenceNumber = args.firstResidueSequenceNumber;
    this.firstCodeForInsertionsOfResidues =
      args.firstCodeForInsertionsOfResidues;
    this.secondResidueName = args.secondResidueName;
    this.secondChainIdentifier = args.secondChainIdentifier;
    this.secondResidueSequenceNumber = args.secondResidueSequenceNumber;
    this.secondCodeForInsertionsOfResidues =
      args.secondCodeForInsertionsOfResidues;
    this.symmetryOperatorForFirstResidue = args.symmetryOperatorForFirstResidue;
    this.symmetryoperatorForSecondResidue =
      args.symmetryoperatorForSecondResidue;
    this.lengthOfDisulfideBond = args.lengthOfDisulfideBond;
  }

  static type = PDBEnums.SSBond;

  static fromPDBFileEntry(args: { id: string; rawData: string }): SSBond {
    const { rawData, id } = args;

    return new SSBond({
      id: id,
      serialNumber: new Snippet(rawData, 8, 10).toInteger(),
      firstResidueName: new Snippet(rawData, 12, 14).toCharacter(),
      firstChainIdentifier: new Snippet(rawData, 16, 16).toCharacter(),
      firstResidueSequenceNumber: new Snippet(rawData, 18, 21).toInteger(),
      firstCodeForInsertionsOfResidues: new Snippet(
        rawData,
        22,
        22
      ).toCharacter(),
      secondResidueName: new Snippet(rawData, 26, 28).toCharacter(),
      secondChainIdentifier: new Snippet(rawData, 30, 30).toCharacter(),
      secondResidueSequenceNumber: new Snippet(rawData, 32, 35).toInteger(),
      secondCodeForInsertionsOfResidues: new Snippet(
        rawData,
        36,
        36
      ).toCharacter(),
      symmetryOperatorForFirstResidue: new Snippet(rawData, 60, 65).toInteger(),
      symmetryoperatorForSecondResidue: new Snippet(
        rawData,
        67,
        72
      ).toInteger(),
      lengthOfDisulfideBond: new Snippet(rawData, 74, 78).toReal(),
    });
  }

  getType(): PDBEnums {
    return SSBond.type;
  }
}
