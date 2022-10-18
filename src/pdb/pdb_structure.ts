/**
 * Class to hold the parsed structure of a given PDB file.
 */

import { PDBElement } from "./pdb_element";
import { PDBParseSettings, parseTextFile } from "./pdb_file_parse";

export default class PDBStructure {
  private entries: PDBElement[] = [];

  constructor(entries: PDBElement[]) {
    this.entries = entries;
  }

  static fromPDBTextFile(
    rawPdbData: string,
    userSettings: PDBParseSettings = {},
    namespace?: string
  ): PDBStructure {
    const defaultSettings: PDBParseSettings = {
      strictMode: false,
      maxLineLength: 80,
    };

    const entries = parseTextFile(
      rawPdbData,
      { ...defaultSettings, ...userSettings },
      namespace
    );

    return new PDBStructure(entries);
  }

  getEntries(): PDBElement[] {
    return this.entries;
  }
}
