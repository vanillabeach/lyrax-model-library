import Atom from '../pdb/library/atom';
import Conect from '../pdb/library/conect';
import PDBStructure from '../pdb/pdb_structure';
import { CoordinatesIn3D } from '../standards/coordinates';
import Bond, { type BondSettings } from './bond';

export type MoleculeArgs = {
  id: string;
  atoms?: Atom[];
  atomBonds?: Bond[];
  coordinates?: CoordinatesIn3D;
};

export default class Molecule {
  id: string;
  atoms: Atom[];
  atomBonds: Bond[];

  constructor(args: MoleculeArgs) {
    this.id = args.id;
    this.atoms = args.atoms || [];
    this.atomBonds = args.atomBonds || [];

    return this;
  }

  static fromPDBStructure(
    id: string,
    pdbStructure: PDBStructure,
    coordinates?: CoordinatesIn3D
  ): Molecule {
    const atoms = Object.values(this.getAtomsFromPDBStructure(pdbStructure));
    const atomBonds: Bond[] = Object.values(
      this.getAtomBondsFromPDBStructure(pdbStructure)
    ).flat(1);

    return new Molecule({
      id,
      coordinates,
      atoms,
      atomBonds,
    });
  }

  addAtom(atom: Atom) {
    this.atoms.push(atom);

    return this;
  }

  addAtoms(atom: Atom[]) {
    this.atoms.push(...atom);

    return this;
  }

  addAtomBond(atom1: Atom, atom2: Atom, settings?: BondSettings) {
    const id = `bondsMap${Object.keys(this.atomBonds).length}`;

    const bond = new Bond({
      id: `${id}_${atom1.id}_${atom2.id}`,
      firstId: atom1.id,
      secondId: atom2.id,
      settings: settings,
    });

    this.atomBonds.push(bond);

    return this;
  }

  addAtomBonds(bonds: Bond[]) {
    this.atomBonds.push(...bonds);

    return this;
  }

  getAtom(id: string) {
    const result = this.atoms.filter((x) => x.id === id);

    return result.length === 0 ? null : result[0];
  }

  getAtomBond(id: string) {
    const result = this.atomBonds.filter((x) => x.id === id);

    return result.length === 0 ? null : result[0];
  }

  static getTheDistanceBetweenTwoAtoms(
    atom1: Atom,
    atom2: Atom
  ): number | null {
    let x1 = atom1.xOrthogonalCoordinate;
    let y1 = atom1.yOrthogonalCoordinate;
    let z1 = atom1.zOrthogonalCoordinate;
    let x2 = atom2.xOrthogonalCoordinate;
    let y2 = atom2.yOrthogonalCoordinate;
    let z2 = atom2.zOrthogonalCoordinate;

    if (x1 === undefined || y1 === undefined || z1 === undefined) {
      return null;
    }

    if (x2 === undefined || y2 === undefined || z2 === undefined) {
      return null;
    }

    return Math.sqrt(
      Math.abs((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2)
    );
  }

  private static getAtomsListFromPDBStructure(
    pdbStructure: PDBStructure
  ): Atom[] {
    return pdbStructure
      .getEntries()
      .filter((x) => x.getType() === Atom.type)
      .map((x) => x as Atom);
  }

  private static getAtomsFromPDBStructure(pdbStructure: PDBStructure): {
    [key: string]: Atom;
  } {
    const atomsMap: { [key: string]: Atom } = {};

    this.getAtomsListFromPDBStructure(pdbStructure).forEach((entry: Atom) => {
      atomsMap[entry.id] = entry;
    });

    return atomsMap;
  }

  private static getAtomBondsFromPDBStructure(pdbStructure: PDBStructure): {
    [key: string]: Bond[];
  } {
    const conectsList = pdbStructure
      .getEntries()
      .filter((x) => x.getType() === Conect.type)
      .map((x) => x as Conect);

    const atomsBySerialNumber: { [key: number]: Atom } = {};
    this.getAtomsListFromPDBStructure(pdbStructure).forEach((entry: Atom) => {
      if (entry.serialNumber !== undefined && entry.serialNumber > 0) {
        atomsBySerialNumber[entry.serialNumber] = entry;
      }
    });

    const bondsMap: { [key: string]: Bond[] } = {};
    let index = 0;
    const bondsId = (index: number, atom1Id: string, atom2Id: string) =>
      `bondsMap${index}_${atom1Id}_${atom2Id}`;

    conectsList.forEach((entry: Conect) => {
      if (entry.serial1 !== undefined && entry.serial1 > 0) {
        const atom1 = atomsBySerialNumber[entry.serial1].id;
        const values: Bond[] = [];

        if (entry.serial2 !== undefined && entry.serial2 > 0) {
          const atom2 = atomsBySerialNumber[entry.serial2].id;
          values.push(
            new Bond({
              id: bondsId(index, atom1, atom2),
              firstId: atom1,
              secondId: atom2,
            })
          );
          index += 1;
        }

        if (entry.serial3 !== undefined && entry.serial3 > 0) {
          const atom2 = atomsBySerialNumber[entry.serial3].id;
          values.push(
            new Bond({
              id: bondsId(index, atom1, atom2),
              firstId: atom1,
              secondId: atom2,
            })
          );
          index += 1;
        }

        if (entry.serial4 !== undefined && entry.serial4 > 0) {
          const atom2 = atomsBySerialNumber[entry.serial4].id;
          values.push(
            new Bond({
              id: bondsId(index, atom1, atom2),
              firstId: atom1,
              secondId: atom2,
            })
          );
          index += 1;
        }

        if (entry.serial5 !== undefined && entry.serial5 > 0) {
          const atom2 = atomsBySerialNumber[entry.serial5].id;
          values.push(
            new Bond({
              id: bondsId(index, atom1, atom2),
              firstId: atom1,
              secondId: atom2,
            })
          );
          index += 1;
        }

        bondsMap[atom1] = values;
      }
    });

    return bondsMap;
  }
}
