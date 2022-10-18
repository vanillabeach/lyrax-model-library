/**
 * The SHEET record indicates the location, sense (anti-parallel, etc.) and
 * registration with respect to the previous strand in the sheet (if any) \
 * of each strand in the model. One record per strand.
 *
 * Definitions can be found at https://bit.ly/3ptKnTu
 */

import { PDBEnums } from '../pdb_element';
import PDBPrimitive from '../pdb_primitive';
import Snippet from '../snippet';

export type SheetArgs = {
  id: string;
  strandNumber?: number;
  identifier?: string;
  numberOfStrands?: number;
  initialResidueName?: string;
  firstChainIdentifier?: string;
  firstResidueSequenceNumber?: number;
  firstCodeForInsertionsOfResidues?: string;
  firstTerminalResidueName?: string;
  secondChainIdentifier?: string;
  secondResidueSequenceNumber?: number;
  secondCodeForInsertionsOfResidues?: string;
  strandSenseWithRespectToPrevious?: number;
  firstAtomName?: string;
  firstAtomResidueName?: string;
  firstAtomChainIdentifier?: string;
  firstAtomResidueSequenceNumber?: number;
  firstAtomCodeForInsertionsOfResidue?: string;
  secondAtomName?: string;
  secondAtomResidueName?: string;
  secondAtomChainIdentifier?: string;
  secondAtomResidueSequenceNumber?: number;
  secondAtomCodeForInsertionsOfResidue?: string;
};

export default class Sheet extends PDBPrimitive {
  // Specific to Lyra
  readonly id: string;

  // Specific to the PDB specification
  readonly strandNumber?: number;
  readonly identifier?: string;
  readonly numberOfStrands?: number;
  readonly initialResidueName?: string;
  readonly firstChainIdentifier?: string;
  readonly firstResidueSequenceNumber?: number;
  readonly firstCodeForInsertionsOfResidues?: string;
  readonly firstTerminalResidueName?: string;
  readonly secondChainIdentifier?: string;
  readonly secondResidueSequenceNumber?: number;
  readonly secondCodeForInsertionsOfResidues?: string;
  readonly strandSenseWithRespectToPrevious?: number;
  readonly firstAtomName?: string;
  readonly firstAtomResidueName?: string;
  readonly firstAtomChainIdentifier?: string;
  readonly firstAtomResidueSequenceNumber?: number;
  readonly firstAtomCodeForInsertionsOfResidue?: string;
  readonly secondAtomName?: string;
  readonly secondAtomResidueName?: string;
  readonly secondAtomChainIdentifier?: string;
  readonly secondAtomResidueSequenceNumber?: number;
  readonly secondAtomCodeForInsertionsOfResidue?: string;

  constructor(args: SheetArgs) {
    super();
    this.id = args.id;
    this.strandNumber = args.strandNumber;
    this.identifier = args.identifier;
    this.numberOfStrands = args.numberOfStrands;
    this.initialResidueName = args.initialResidueName;
    this.firstChainIdentifier = args.firstChainIdentifier;
    this.firstResidueSequenceNumber = args.firstResidueSequenceNumber;
    this.firstCodeForInsertionsOfResidues =
      args.firstCodeForInsertionsOfResidues;
    this.firstTerminalResidueName = args.firstTerminalResidueName;
    this.secondChainIdentifier = args.secondChainIdentifier;
    this.secondResidueSequenceNumber = args.secondResidueSequenceNumber;
    this.secondCodeForInsertionsOfResidues =
      args.secondCodeForInsertionsOfResidues;
    this.strandSenseWithRespectToPrevious =
      args.strandSenseWithRespectToPrevious;
    this.firstAtomName = args.firstAtomName;
    this.firstAtomResidueName = args.firstAtomResidueName;
    this.firstAtomChainIdentifier = args.firstAtomChainIdentifier;
    this.firstAtomResidueSequenceNumber = args.firstAtomResidueSequenceNumber;
    this.firstAtomCodeForInsertionsOfResidue =
      args.firstAtomCodeForInsertionsOfResidue;
    this.secondAtomName = args.secondAtomName;
    this.secondAtomResidueName = args.secondAtomResidueName;
    this.secondAtomChainIdentifier = args.secondAtomChainIdentifier;
    this.secondAtomResidueSequenceNumber = args.secondAtomResidueSequenceNumber;
    this.secondAtomCodeForInsertionsOfResidue =
      args.secondAtomCodeForInsertionsOfResidue;
  }

  static type = PDBEnums.Sheet;

  static fromPDBFileEntry(args: { id: string; rawData: string }): Sheet {
    const { rawData, id } = args;

    return new Sheet({
      id: id,
      strandNumber: new Snippet(rawData, 8, 10).toInteger(),
      identifier: new Snippet(rawData, 12, 14).toCharacter(),
      numberOfStrands: new Snippet(rawData, 15, 16).toInteger(),
      initialResidueName: new Snippet(rawData, 18, 20).toCharacter(),
      firstChainIdentifier: new Snippet(rawData, 22, 22).toCharacter(),
      firstResidueSequenceNumber: new Snippet(rawData, 23, 26).toInteger(),
      firstCodeForInsertionsOfResidues: new Snippet(
        rawData,
        27,
        27
      ).toCharacter(),
      firstTerminalResidueName: new Snippet(rawData, 29, 31).toCharacter(),
      secondChainIdentifier: new Snippet(rawData, 33, 33).toCharacter(),
      secondResidueSequenceNumber: new Snippet(rawData, 34, 37).toInteger(),
      secondCodeForInsertionsOfResidues: new Snippet(
        rawData,
        38,
        38
      ).toCharacter(),
      strandSenseWithRespectToPrevious: new Snippet(
        rawData,
        39,
        40
      ).toInteger(),
      firstAtomName: new Snippet(rawData, 42, 45).toCharacter(),
      firstAtomResidueName: new Snippet(rawData, 46, 48).toCharacter(),
      firstAtomChainIdentifier: new Snippet(rawData, 50, 50).toCharacter(),
      firstAtomResidueSequenceNumber: new Snippet(rawData, 51, 54).toInteger(),
      firstAtomCodeForInsertionsOfResidue: new Snippet(
        rawData,
        55,
        55
      ).toCharacter(),
      secondAtomName: new Snippet(rawData, 57, 60).toCharacter(),
      secondAtomResidueName: new Snippet(rawData, 61, 63).toCharacter(),
      secondAtomChainIdentifier: new Snippet(rawData, 65, 65).toCharacter(),
      secondAtomResidueSequenceNumber: new Snippet(rawData, 66, 69).toInteger(),
      secondAtomCodeForInsertionsOfResidue: new Snippet(
        rawData,
        70,
        70
      ).toCharacter(),
    });
  }

  getId(): string {
    return this.id;
  }

  getType(): PDBEnums {
    return Sheet.type;
  }
}
