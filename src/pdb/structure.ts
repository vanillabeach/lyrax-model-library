/**
 * Class to hold the parsed structure of a given PDB file.
 */

import Anisou from './library/anisou';
import Atom from './library/atom';
import Conect from './library/conect';
import Helix from './library/helix';
import HetAtm from './library/hetatm';
import Sheet from './library/sheet';
import SSBond from './library/ssbond';

import Snippet from './snippet';
import { PDBEnums, PDBElement } from './pdb_element';

export default class Structure {
  private entries: PDBElement[] = [];
  private rawPdbData: string;

  constructor(rawPdbData: string) {
    this.rawPdbData = rawPdbData;
    this.entries = this.parse(this.rawPdbData);
  }

  getEntries(): PDBElement[] {
    return this.entries;
  }

  getRawPdbData(): string {
    return this.rawPdbData;
  }

  parse(textFile: string): PDBElement[] {
    const lines = textFile.split('\n');
    const result: PDBElement[] = [];

    lines.forEach((line) => {
      const entryType = new Snippet(line, 1, 6).toCharacter().toUpperCase();

      switch (entryType) {
        case PDBEnums.Anisou:
          result.push(new Anisou({ rawData: line }));
          break;

        case PDBEnums.Atom:
          result.push(new Atom({ rawData: line }));
          break;

        case PDBEnums.Conect:
          result.push(new Conect({ rawData: line }));
          break;

        case PDBEnums.Helix:
          result.push(new Helix({ rawData: line }));
          break;

        case PDBEnums.HetAtm:
          result.push(new HetAtm({ rawData: line }));
          break;

        case PDBEnums.Sheet:
          result.push(new Sheet({ rawData: line }));
          break;

        case PDBEnums.SSBond:
          result.push(new Sheet({ rawData: line }));
          break;

        default:
          break;
      }
    });

    return result;
  }
}
