/**
 * Class to hold the parsed structure of a given PDB file.
 */
import { PDBElement } from './pdb_element';
export declare type StructSettings = {
    strictMode: boolean;
    maxLineLength: number;
};
export default class Structure {
    private entries;
    private rawPdbData;
    private settings;
    constructor(rawPdbData: string, userSettings?: StructSettings);
    getEntries(): PDBElement[];
    getRawPdbData(): string;
    parse(textFile: string): PDBElement[];
}
