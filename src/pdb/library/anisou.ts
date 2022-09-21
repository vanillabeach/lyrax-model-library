/**
 * The ANISOU records present the anisotropic temperature factors.
 *
 * Definitions can be found at https://bit.ly/3A2ZCHX
 */

import { PDBEnums } from '../pdb_element';
import PDBPrimitive from '../pdb_primitive';
import Snippet from '../snippet';

export type AnisouArgs = {
  id: string;
  serialNumber?: number;
  name?: string;
  alternateLocation?: string;
  residueName?: string;
  chainIdentifier?: string;
  residueSequenceNumber?: number;
  insertionCode?: string;
  u_0_0?: number; // U(1,1)
  u_1_1?: number; // U(2,2)
  u_2_2?: number; // U(3,3)
  u_0_1?: number; // U(1,2)
  u_0_2?: number; // U(1,3)
  u_1_2?: number; // U(2,3)
  element?: string;
  charge?: string;
};

export default class Anisou extends PDBPrimitive {
  // Specific to Lyra
  readonly id: string;

  // Specific to the PDB specification
  readonly serialNumber?: number;
  readonly name?: string;
  readonly alternateLocation?: string;
  readonly residueName?: string;
  readonly chainIdentifier?: string;
  readonly residueSequenceNumber?: number;
  readonly insertionCode?: string;
  readonly u_0_0?: number; // U(1,1)
  readonly u_1_1?: number; // U(2,2)
  readonly u_2_2?: number; // U(3,3)
  readonly u_0_1?: number; // U(1,2)
  readonly u_0_2?: number; // U(1,3)
  readonly u_1_2?: number; // U(2,3)
  readonly element?: string;
  readonly charge?: string;

  constructor(args: AnisouArgs) {
    super();

    this.id = args.id;
    this.name = args.name;
    this.alternateLocation = args.alternateLocation;
    this.residueName = args.residueName;
    this.chainIdentifier = args.chainIdentifier;
    this.residueSequenceNumber = args.residueSequenceNumber;
    this.insertionCode = args.insertionCode;
    this.u_0_0 = args.u_0_0;
    this.u_1_1 = args.u_1_1;
    this.u_2_2 = args.u_2_2;
    this.u_0_1 = args.u_0_1;
    this.u_0_2 = args.u_0_2;
    this.u_1_2 = args.u_1_2;
    this.element = args.element;
    this.charge = args.charge;
  }

  static fromPDBFileEntry(args: { id: string; rawData: string }): Anisou {
    const { rawData, id } = args;

    return new Anisou({
      id: id,
      serialNumber: new Snippet(rawData, 7, 11).toInteger(),
      name: new Snippet(rawData, 13, 16).toCharacter(),
      alternateLocation: new Snippet(rawData, 17, 17).toCharacter(),
      residueName: new Snippet(rawData, 18, 20).toCharacter(),
      chainIdentifier: new Snippet(rawData, 22, 22).toCharacter(),
      residueSequenceNumber: new Snippet(rawData, 23, 26).toInteger(),
      insertionCode: new Snippet(rawData, 27, 27).toCharacter(),
      u_0_0: new Snippet(rawData, 29, 35).toInteger(),
      u_1_1: new Snippet(rawData, 36, 42).toInteger(),
      u_2_2: new Snippet(rawData, 43, 49).toInteger(),
      u_0_1: new Snippet(rawData, 50, 56).toInteger(),
      u_0_2: new Snippet(rawData, 57, 63).toInteger(),
      u_1_2: new Snippet(rawData, 64, 70).toInteger(),
      element: new Snippet(rawData, 77, 78).toCharacter(),
      charge: new Snippet(rawData, 79, 80).toCharacter(),
    });
  }

  getType(): PDBEnums {
    return PDBEnums.Anisou;
  }
}
