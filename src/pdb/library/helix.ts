/**
 * The HELIX record indicates the location and type (right-handed alpha, etc.)
 * of helices. One record per helix.
 *
 * Definitions can be found at https://bit.ly/3ptKnTu
 */

import { PDBEnums } from '../pdb_element';
import PDBPrimitive from '../pdb_primitive';
import Snippet from '../snippet';

export type HelixArgs = {
  id: string;
  serialNumber?: number;
  identifier?: string;
  initialResidueName?: string;
  firstChainIdentifier?: string;
  firstResidueSequenceNumber?: number;
  firstCodeForInsertionsOfResidues?: string;
  firstTerminalResidueName?: string;
  secondChainIdentifier?: string;
  secondResidueSequenceNumber?: number;
  secondCodeForInsertionsOfResidues?: string;
  typeOfHelix?: number;
  comment?: string;
  lengthOfHelix?: string;
};

export default class Helix extends PDBPrimitive {
  // Specific to Lyra
  readonly id: string;

  // Specific to the PDB specification
  readonly serialNumber?: number;
  readonly identifier?: string;
  readonly initialResidueName?: string;
  readonly firstChainIdentifier?: string;
  readonly firstResidueSequenceNumber?: number;
  readonly firstCodeForInsertionsOfResidues?: string;
  readonly firstTerminalResidueName?: string;
  readonly secondChainIdentifier?: string;
  readonly secondResidueSequenceNumber?: number;
  readonly secondCodeForInsertionsOfResidues?: string;
  readonly typeOfHelix?: number;
  readonly comment?: string;
  readonly lengthOfHelix?: string;

  constructor(args: HelixArgs) {
    super();

    this.id = args.id;
    this.serialNumber = args.serialNumber;
    this.identifier = args.identifier;
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
    this.typeOfHelix = args.typeOfHelix;
    this.comment = args.comment;
    this.lengthOfHelix = args.lengthOfHelix;
  }

  static type = PDBEnums.Helix;

  static fromPDBFileEntry(args: { id: string; rawData: string }): Helix {
    const { rawData, id } = args;

    return new Helix({
      id: id,
      serialNumber: new Snippet(rawData, 8, 10).toInteger(),
      identifier: new Snippet(rawData, 12, 14).toCharacter(),
      initialResidueName: new Snippet(rawData, 16, 18).toCharacter(),
      firstChainIdentifier: new Snippet(rawData, 20, 20).toCharacter(),
      firstResidueSequenceNumber: new Snippet(rawData, 22, 25).toInteger(),
      firstCodeForInsertionsOfResidues: new Snippet(
        rawData,
        26,
        26
      ).toCharacter(),
      firstTerminalResidueName: new Snippet(rawData, 28, 30).toCharacter(),
      secondChainIdentifier: new Snippet(rawData, 32, 32).toCharacter(),
      secondResidueSequenceNumber: new Snippet(rawData, 34, 37).toInteger(),
      secondCodeForInsertionsOfResidues: new Snippet(
        rawData,
        38,
        38
      ).toCharacter(),
      typeOfHelix: new Snippet(rawData, 39, 40).toInteger(),
      comment: new Snippet(rawData, 41, 70).toCharacter(),
      lengthOfHelix: new Snippet(rawData, 72, 76).toCharacter(),
    });
  }

  getType(): PDBEnums {
    return Helix.type;
  }
}
