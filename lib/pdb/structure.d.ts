/**
 * Class to hold the parsed structure of a given PDB file.
 */
import { PDBElement } from './pdb_element';
export default class Structure {
    private entries;
    private rawPdbData;
    constructor(rawPdbData: string);
    getEntries(): PDBElement[];
    getRawPdbData(): string;
    parse(textFile: string): PDBElement[];
}
