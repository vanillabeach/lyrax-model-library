import Atom from "../pdb/library/atom";
import PDBStructure from "../pdb/pdb_structure";
import { CoordinatesIn3D } from "../standards/coordinates";
import Bond, { BondSettings } from "./bond";
export declare type MoleculeArgs = {
    id: string;
    atoms?: Atom[];
    atomBonds?: Bond[];
    coordinates?: CoordinatesIn3D;
};
export default class Molecule {
    id: string;
    atoms: Atom[];
    atomBonds: Bond[];
    private coordinates?;
    constructor(args: MoleculeArgs);
    static fromPDBStructure(id: string, pdbStructure: PDBStructure, coordinates?: CoordinatesIn3D): Molecule;
    addAtom(atom: Atom): this;
    addAtoms(atom: Atom[]): this;
    addAtomBond(atom1: Atom, atom2: Atom, settings?: BondSettings): this;
    addAtomBonds(bonds: Bond[]): this;
    getAtom(id: string): Atom | null;
    getAtomBond(id: string): Bond | null;
    static getTheDistanceBetweenTwoAtoms(atom1: Atom, atom2: Atom): number | null;
    private static getAtomsListFromPDBStructure;
    private static getAtomsFromPDBStructure;
    private static getAtomBondsFromPDBStructure;
}
