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
  rawData?: string;
};

export default class Helix extends PDBPrimitive {
  private id: string;

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

  constructor(args: HelixArgs) {
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
    return PDBEnums.Helix;
  }

  parse(rawData: string): void {
    this.serialNumber = new Snippet(rawData, 8, 10).toInteger();
    this.identifier = new Snippet(rawData, 12, 14).toCharacter();
    this.initialResidueName = new Snippet(rawData, 16, 18).toCharacter();
    this.firstChainIdentifier = new Snippet(rawData, 20, 20).toCharacter();
    this.firstResidueSequenceNumber = new Snippet(rawData, 22, 25).toInteger();
    this.firstCodeForInsertionsOfResidues = new Snippet(
      rawData,
      26,
      26
    ).toCharacter();
    this.firstTerminalResidueName = new Snippet(rawData, 28, 30).toCharacter();
    this.secondChainIdentifier = new Snippet(rawData, 32, 32).toCharacter();
    this.secondResidueSequenceNumber = new Snippet(rawData, 34, 37).toInteger();
    this.secondCodeForInsertionsOfResidues = new Snippet(
      rawData,
      38,
      38
    ).toCharacter();
    this.typeOfHelix = new Snippet(rawData, 39, 40).toInteger();
    this.comment = new Snippet(rawData, 41, 70).toCharacter();
    this.lengthOfHelix = new Snippet(rawData, 72, 76).toCharacter();
  }
}
