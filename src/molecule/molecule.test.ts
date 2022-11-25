import Atom from "../pdb/library/atom";
import Bond from "./bond";
import PDBStructure from "../pdb/pdb_structure";

import Molecule from "./molecule";

const PDB_FILE_AS_TEXT = `HEADER    NONAME 23-Apr-10                                              NONE   1
TITLE                                                                   NONE   2
AUTHOR    Chemical Structure Services at http://cactus.nci.nih.gov      NONE   3
REVDAT   1  23-Apr-10     0                                             NONE   4
ATOM      1  C           0       0.011  -0.566   0.000  0.00  0.00           C+0
ATOM      2  C           0      -1.285   0.246  -0.000  0.00  0.00           C+0
ATOM      3  H           0       1.925  -0.229  -0.000  0.00  0.00           H+0
ATOM      4  O           0       1.130   0.322   0.000  0.00  0.00           O+0
ATOM      5  H           0       0.046  -1.195   0.890  0.00  0.00           H+0
ATOM      6  H           0       0.046  -1.195  -0.890  0.00  0.00           H+0
ATOM      7  H           0      -2.139  -0.432   0.000  0.00  0.00           H+0
ATOM      8  H           0      -1.320   0.875   0.890  0.00  0.00           H+0
ATOM      9  H           0      -1.320   0.875  -0.890  0.00  0.00           H+0
CONECT    1    2    4    5    6                                         NONE  14
CONECT    2    7    8    9    0                                       NONE  15
CONECT    4    3    0    0    0                                         NONE  16
END`;

const atom1 = new Atom({
  id: "atom1",
  serialNumber: 1,
  xOrthogonalCoordinate: 1.0,
  yOrthogonalCoordinate: 1.0,
  zOrthogonalCoordinate: 0.0,
  elementSymbol: "c",
});
const atom2 = new Atom({
  id: "atom2",
  serialNumber: 2,
  xOrthogonalCoordinate: 2.0,
  yOrthogonalCoordinate: 1.0,
  zOrthogonalCoordinate: 2.0,
  elementSymbol: "c",
});
const atom3 = new Atom({
  id: "atom3",
  serialNumber: 3,
  xOrthogonalCoordinate: 5.745,
  yOrthogonalCoordinate: 3.285,
  zOrthogonalCoordinate: 0.136,
  elementSymbol: "h",
});
const bond1 = new Bond({
  id: "bond1",
  firstId: atom1.id,
  secondId: atom2.id,
});

describe(Molecule, () => {
  describe("constructor", () => {
    describe("default", () => {
      test("valid constructor with predefined values", () => {
        const molecule = new Molecule({
          id: "molecule1",
          atoms: [atom1, atom2, atom3],
          atomBonds: [bond1],
        });

        expect(molecule).not.toBe(null);
      });

      test("valid constructor with accumulated values", () => {
        const molecule = new Molecule({
          id: "molecule1",
        });

        molecule
          .addAtom(atom1)
          .addAtom(atom2)
          .addAtom(atom3)
          .addAtomBond(atom1, atom2);

        expect(molecule).not.toBe(null);
        expect(molecule.atoms[0].id).toEqual(atom1.id);
      });

      test("valid constructor with accumulated values", () => {
        const molecule = new Molecule({
          id: "molecule1",
          atoms: [atom1, atom2, atom3],
          atomBonds: [bond1],
        });

        const atomIds = molecule.atoms.map((x) => x.id);
        expect(atomIds).toEqual([atom1.id, atom2.id, atom3.id]);

        const bondIds = molecule.atomBonds.map((x) => x.id);
        expect(bondIds).toEqual([bond1.id]);
      });
    });

    describe("factory methods", () => {
      const examplePdbStructure =
        PDBStructure.fromPDBTextFile(PDB_FILE_AS_TEXT);

      describe(Molecule.fromPDBStructure, () => {
        const molecule = Molecule.fromPDBStructure(
          "molecule1",
          examplePdbStructure
        );

        expect(molecule).not.toBe(null);
        expect(molecule.atoms[0].id).toEqual("pdb_4ATOM");
      });

      test("valid constructor with accumulated values", () => {
        const molecule = Molecule.fromPDBStructure(
          "molecule1",
          examplePdbStructure
        );

        const atomIds = molecule.atoms.map((x) => x.id);
        expect(atomIds).toEqual([
          "pdb_4ATOM",
          "pdb_5ATOM",
          "pdb_6ATOM",
          "pdb_7ATOM",
          "pdb_8ATOM",
          "pdb_9ATOM",
          "pdb_10ATOM",
          "pdb_11ATOM",
          "pdb_12ATOM",
        ]);

        const bondIds = molecule.atomBonds.map((x) => x.id);
        console.log("bondIds", bondIds);
        expect(bondIds).toEqual([
          "bondsMap0_pdb_4ATOM_pdb_5ATOM",
          "bondsMap1_pdb_4ATOM_pdb_7ATOM",
          "bondsMap2_pdb_4ATOM_pdb_8ATOM",
          "bondsMap3_pdb_4ATOM_pdb_9ATOM",
          "bondsMap4_pdb_5ATOM_pdb_10ATOM",
          "bondsMap5_pdb_5ATOM_pdb_11ATOM",
          "bondsMap6_pdb_5ATOM_pdb_12ATOM",
          "bondsMap7_pdb_7ATOM_pdb_6ATOM",
        ]);
      });
    });

    describe("other static methods", () => {
      describe(Molecule.getTheDistanceBetweenTwoAtoms, () => {
        test("works with valid numbers", () => {
          const distanceBetweenAtom1AndAtom2 =
            Molecule.getTheDistanceBetweenTwoAtoms(atom1, atom2);
          expect(Number(distanceBetweenAtom1AndAtom2!.toFixed(2))).toEqual(
            2.24
          );
        });
        test("captures invalid numbers", () => {
          const nullAtom = new Atom({ id: "nullAtom" });
          const distanceBetweenAtom1AndNullAtom =
            Molecule.getTheDistanceBetweenTwoAtoms(atom1, nullAtom);
          expect(distanceBetweenAtom1AndNullAtom).toBeNull();
        });
      });
    });
  });
});
