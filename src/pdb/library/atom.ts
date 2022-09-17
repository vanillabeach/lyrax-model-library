/**
 * Atomic coordinate record containing the X,Y,Z orthogonal Å coordinates for
 * atoms in standard residues (amino acids and nucleic acids).
 *
 * Definitions can be found at https://bit.ly/3BIPnv1
 */

import { capitalize } from '../../utils/text';
import { CPK } from '../../standards/cpk';
import { PDBEnums } from '../pdb_element';
import PDBPrimitive from '../pdb_primitive';
import Snippet from '../snippet';

export type AtomArgs = {
  rawData?: string;
};

export default class Atom extends PDBPrimitive {
  serialNumber?: number;
  name?: string;
  alternateLocationIndicator?: string;
  residueName?: string;
  chainIdentifier?: string;
  residueSequenceNumber?: number;
  codeForInsertionsOfResidue?: string;
  xOrthogonalCoordinate?: number;
  yOrthogonalCoordinate?: number;
  zOrthogonalCoordinate?: number;
  occupancy?: number;
  temperatureFactor?: number;
  segmentIdentifier?: string;
  elementSymbol?: string;
  charge?: string;

  constructor(args: AtomArgs) {
    super();
    if (args.rawData) {
      this.parse(args.rawData);
    }
  }

  getCapitalizedName(): string {
    const entry = this.elementSymbol ? this.elementSymbol : this.name;

    return capitalize(entry!.toLowerCase());
  }

  getElement(): string {
    const entry = this.elementSymbol ? this.elementSymbol : this.name;

    return entry!.replace(/[^a-zA-Z]+/g, '');
  }

  getCPKColor(): number[] {
    const key = this.getElement().toLowerCase();

    return CPK[key] ? CPK[key] : CPK['DEFAULT'];
  }

  getType(): string {
    return PDBEnums.Atom;
  }

  parse(rawData: string): void {
    this.serialNumber = new Snippet(rawData, 7, 11).toInteger();
    this.name = new Snippet(rawData, 13, 16).toCharacter();
    this.alternateLocationIndicator = new Snippet(
      rawData,
      17,
      17
    ).toCharacter();
    this.residueName = new Snippet(rawData, 18, 20).toCharacter();
    this.chainIdentifier = new Snippet(rawData, 22, 22).toCharacter();
    this.residueSequenceNumber = new Snippet(rawData, 23, 26).toInteger();
    this.codeForInsertionsOfResidue = new Snippet(
      rawData,
      27,
      27
    ).toCharacter();
    this.xOrthogonalCoordinate = new Snippet(rawData, 31, 38).toReal();
    this.yOrthogonalCoordinate = new Snippet(rawData, 39, 46).toReal();
    this.zOrthogonalCoordinate = new Snippet(rawData, 47, 54).toReal();
    this.occupancy = new Snippet(rawData, 55, 60).toReal();
    this.temperatureFactor = new Snippet(rawData, 61, 66).toReal();
    this.segmentIdentifier = new Snippet(rawData, 73, 76).toCharacter();
    this.elementSymbol = new Snippet(rawData, 77, 78).toCharacter();
    this.charge = new Snippet(rawData, 79, 80).toCharacter();
  }
}
