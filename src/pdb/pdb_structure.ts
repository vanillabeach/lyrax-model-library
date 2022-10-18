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
import Ter from './library/ter';

import Snippet from './snippet';
import { PDBEnums, PDBElement } from './pdb_element';

export type PDBStructureSettings = {
  id?: string;
  strictMode?: boolean;
  maxLineLength?: number;
};

const defaultSettings: PDBStructureSettings = {
  id: '',
  strictMode: false,
  maxLineLength: 80,
};

export default class PDBStructure {
  private entries: PDBElement[] = [];
  private rawPdbData: string;
  private settings: PDBStructureSettings = defaultSettings;

  constructor(rawPdbData: string, userSettings?: PDBStructureSettings) {
    if (userSettings) {
      this.settings = { ...this.settings, ...userSettings };
    }

    const { id, strictMode } = this.settings;
    if (strictMode === true) {
      if (id?.trim() === '' || id === undefined || id === null) {
        throw Error('Strict mode : "id" field is missing or empty.');
      }
    }
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
    const { id, maxLineLength, strictMode } = this.settings;

    lines.forEach((line, index) => {
      // Handle empty lines
      if (line.trim().length === 0) {
        return;
      }

      // "Strict mode" settings.
      if (strictMode === true) {
        if (line.length > maxLineLength!) {
          throw Error(
            `Strict mode : PDB file contains line with length greater than ${maxLineLength}.`
          );
        }
      }

      const entryType = Snippet.getSnippetType(line);
      const keyPrefix = id ? `${id}_` : ``;
      const key = `${keyPrefix}pdb_${index}${entryType}`;
      const args = { id: key, rawData: line };

      switch (entryType) {
        case PDBEnums.Anisou:
          result.push(Anisou.fromPDBFileEntry(args));
          break;

        case PDBEnums.Atom:
          result.push(Atom.fromPDBFileEntry(args));
          break;

        case PDBEnums.Conect:
          result.push(Conect.fromPDBFileEntry(args));
          break;

        case PDBEnums.Helix:
          result.push(Helix.fromPDBFileEntry(args));
          break;

        case PDBEnums.HetAtm:
          result.push(HetAtm.fromPDBFileEntry(args));
          break;

        case PDBEnums.Sheet:
          result.push(Sheet.fromPDBFileEntry(args));
          break;

        case PDBEnums.SSBond:
          result.push(SSBond.fromPDBFileEntry(args));
          break;

        case PDBEnums.Ter:
          result.push(Ter.fromPDBFileEntry(args));
          break;

        default:
          break;
      }
    });

    return result;
  }
}
