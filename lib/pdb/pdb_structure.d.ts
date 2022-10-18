/**
 * Class to hold the parsed structure of a given PDB file.
 */
import { PDBElement } from "./pdb_element";
import { PDBParseSettings } from "./pdb_file_parse";
export default class PDBStructure {
    private entries;
    constructor(entries: PDBElement[]);
    static fromPDBTextFile(rawPdbData: string, userSettings?: PDBParseSettings, namespace?: string): PDBStructure;
    getEntries(): PDBElement[];
}
