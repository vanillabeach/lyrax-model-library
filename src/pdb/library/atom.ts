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
  id: string;
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
};

export default class Atom extends PDBPrimitive {
  // Specific to Lyra
  readonly id: string;

  // Specific to the PDB specification
  readonly serialNumber?: number;
  readonly name?: string;
  readonly alternateLocationIndicator?: string;
  readonly residueName?: string;
  readonly chainIdentifier?: string;
  readonly residueSequenceNumber?: number;
  readonly codeForInsertionsOfResidue?: string;
  readonly xOrthogonalCoordinate?: number;
  readonly yOrthogonalCoordinate?: number;
  readonly zOrthogonalCoordinate?: number;
  readonly occupancy?: number;
  readonly temperatureFactor?: number;
  readonly segmentIdentifier?: string;
  readonly elementSymbol?: string;
  readonly charge?: string;

  constructor(args: AtomArgs) {
    super();

    this.id = args.id;
    this.serialNumber = args.serialNumber;
    this.name = args.name;
    this.alternateLocationIndicator = args.alternateLocationIndicator;
    this.residueName = args.residueName;
    this.chainIdentifier = args.chainIdentifier;
    this.residueSequenceNumber = args.residueSequenceNumber;
    this.codeForInsertionsOfResidue = args.codeForInsertionsOfResidue;
    this.xOrthogonalCoordinate = args.xOrthogonalCoordinate;
    this.yOrthogonalCoordinate = args.yOrthogonalCoordinate;
    this.zOrthogonalCoordinate = args.zOrthogonalCoordinate;
    this.occupancy = args.occupancy;
    this.temperatureFactor = args.temperatureFactor;
    this.segmentIdentifier = args.segmentIdentifier;
    this.elementSymbol = args.elementSymbol;
    this.charge = args.charge;
  }

  static fromPDBFileEntry(args: { id: string; rawData: string }): Atom {
    const { rawData, id } = args;

    return new Atom({
      id: id,
      serialNumber: new Snippet(rawData, 7, 11).toInteger(),
      name: new Snippet(rawData, 13, 16).toCharacter(),
      alternateLocationIndicator: new Snippet(rawData, 17, 17).toCharacter(),
      residueName: new Snippet(rawData, 18, 20).toCharacter(),
      chainIdentifier: new Snippet(rawData, 22, 22).toCharacter(),
      residueSequenceNumber: new Snippet(rawData, 23, 26).toInteger(),
      codeForInsertionsOfResidue: new Snippet(rawData, 27, 27).toCharacter(),
      xOrthogonalCoordinate: new Snippet(rawData, 31, 38).toReal(),
      yOrthogonalCoordinate: new Snippet(rawData, 39, 46).toReal(),
      zOrthogonalCoordinate: new Snippet(rawData, 47, 54).toReal(),
      temperatureFactor: new Snippet(rawData, 61, 66).toReal(),
      segmentIdentifier: new Snippet(rawData, 73, 76).toCharacter(),
      elementSymbol: new Snippet(rawData, 77, 78).toCharacter(),
      charge: new Snippet(rawData, 79, 80).toCharacter(),
    });
  }

  getCapitalizedName(): string {
    const entry = this.elementSymbol ? this.elementSymbol : this.name;

    return capitalize(entry!.toLowerCase());
  }

  getCPKColor(): number[] {
    const key = this.getElement().toLowerCase();

    return CPK[key] ? CPK[key] : CPK['DEFAULT'];
  }

  getElement(): string {
    const entry = this.elementSymbol ? this.elementSymbol : this.name;

    return entry!.replace(/[^a-zA-Z]+/g, '');
  }

  getType(): string {
    return PDBEnums.Atom;
  }
}
