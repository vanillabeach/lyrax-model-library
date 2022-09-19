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
      const key = `pdb_${id}_${index}${entryType}`;

      switch (entryType) {
        case PDBEnums.Anisou:
          result.push(new Anisou({ id: key, rawData: line }));
          break;

        case PDBEnums.Atom:
          result.push(new Atom({ id: key, rawData: line }));
          break;

        case PDBEnums.Conect:
          result.push(new Conect({ id: key, rawData: line }));
          break;

        case PDBEnums.Helix:
          result.push(new Helix({ id: key, rawData: line }));
          break;

        case PDBEnums.HetAtm:
          result.push(new HetAtm({ id: key, rawData: line }));
          break;

        case PDBEnums.Sheet:
          result.push(new Sheet({ id: key, rawData: line }));
          break;

        case PDBEnums.SSBond:
          result.push(new SSBond({ id: key, rawData: line }));
          break;

        default:
          break;
      }
    });

    return result;
  }
}
