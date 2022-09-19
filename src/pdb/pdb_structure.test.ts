import PDBStructure from './pdb_structure';

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

const EXTRA_LONG_LINE = `ATOM      1  C           0       0.011  -0.566   0.000  0.00  0.00           C+0                   `;
const VALID_ID = '1';

describe(PDBStructure, () => {
  describe('Default Settings', () => {
    test('Valid Constructor', () => {
      expect(new PDBStructure(PDB_FILE_AS_TEXT)).not.toBeNull;
      expect(new PDBStructure(EXTRA_LONG_LINE)).not.toBeNull;
    });
  });

  describe('Strict Settings', () => {
    test('Valid Constructor', () => {
      expect(
        new PDBStructure(PDB_FILE_AS_TEXT, { strictMode: true, id: VALID_ID })
      ).not.toBeNull;
      expect(
        new PDBStructure(EXTRA_LONG_LINE, {
          strictMode: true,
          id: VALID_ID,
          maxLineLength: 100,
        })
      ).not.toBeNull;
    });
    test('Sirict Mode', () => {
      expect(() => {
        new PDBStructure(EXTRA_LONG_LINE, { strictMode: true });
      }).toThrowError();

      expect(() => {
        new PDBStructure(EXTRA_LONG_LINE, { strictMode: true, id: VALID_ID });
      }).toThrowError();
    });
  });
});
