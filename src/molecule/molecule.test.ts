import Atom from "../pdb/library/atom";
import Bond, { BondSettings } from "./bond";
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
  xOrthogonalCoordinate: 4.956,
  yOrthogonalCoordinate: 1.984,
  zOrthogonalCoordinate: 1.394,
  elementSymbol: "c",
});
const atom2 = new Atom({
  id: "atom2",
  serialNumber: 2,
  xOrthogonalCoordinate: 4.745,
  yOrthogonalCoordinate: 1.285,
  zOrthogonalCoordinate: 0.166,
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
      test("Valid Constructor with predefined values", () => {
        const molecule = new Molecule({
          id: "molecule1",
          atoms: [atom1, atom2, atom3],
          atomBonds: [bond1],
        });

        expect(molecule).not.toBe(null);
      });

      test("Valid Constructor with accumulated values", () => {
        const molecule = new Molecule({
          id: "molecule1",
        });

        molecule
          .addAtom(atom1)
          .addAtom(atom2)
          .addAtom(atom3)
          .addBond(atom1, atom2);

        expect(molecule).not.toBe(null);
        expect(molecule.atoms[0].id).toEqual(atom1.id);
      });
    });

    describe(Molecule.fromPDBStructure, () => {
      const examplePdbStructure =
        PDBStructure.fromPDBTextFile(PDB_FILE_AS_TEXT);
      const molecule = Molecule.fromPDBStructure(
        "molecule1",
        examplePdbStructure
      );

      expect(molecule).not.toBe(null);
      expect(molecule.atoms[0].id).toEqual("pdb_4ATOM");
    });
  });
});
