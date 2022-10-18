import PDBStructure from '../pdb/pdb_structure';
import { PDBElement } from '../pdb/pdb_element';
import { CoordinatesIn3D } from '../standards/coordinates';
export declare type MoleculeArgs = {
    id: string;
    pdbStructure: PDBStructure;
    coordinates?: CoordinatesIn3D;
};
export default class Molecule {
    private id;
    private pdbStructure;
    private coordinates?;
    get pdbEntries(): PDBElement[];
    constructor(args: MoleculeArgs);
}
