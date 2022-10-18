import Anisou from "./library/anisou";
import Atom from "./library/atom";
import Conect from "./library/conect";
import Helix from "./library/helix";
import HetAtm from "./library/hetatm";
import Sheet from "./library/sheet";
import SSBond from "./library/ssbond";
import Ter from "./library/ter";

import Snippet from "./snippet";
import { PDBEnums, PDBElement } from "./pdb_element";

export type PDBParseSettings = {
  strictMode?: boolean;
  maxLineLength?: number;
};

export function parseTextFile(
  textFile: string,
  settings: PDBParseSettings,
  namespace?: string
): PDBElement[] {
  const lines = textFile.split("\n");
  const result: PDBElement[] = [];
  const { maxLineLength, strictMode } = settings;

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
    const keyPrefix = namespace ? `${namespace}_` : ``;
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
