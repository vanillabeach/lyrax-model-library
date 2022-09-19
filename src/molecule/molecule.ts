import PDBStructure from '../pdb/pdb_structure';
import { CoordinatesIn3D } from '../standards/coordinates';

export type MoleculeArgs = {
  id: string;
  pdbStructure: PDBStructure;
  coordinates?: CoordinatesIn3D;
};

export default class Molecule {
  private id: string;
  private pdbStructure: PDBStructure;
  private coordinates?: CoordinatesIn3D;

  constructor(args: MoleculeArgs) {
    this.id = args.id;
    this.pdbStructure = args.pdbStructure;

    if (args.coordinates) {
      this.coordinates = args.coordinates;
    }
  }
}
