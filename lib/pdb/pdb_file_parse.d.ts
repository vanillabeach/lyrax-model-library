import { PDBElement } from "./pdb_element";
export declare type PDBParseSettings = {
    strictMode?: boolean;
    maxLineLength?: number;
};
export declare function parseTextFile(textFile: string, settings: PDBParseSettings, namespace?: string): PDBElement[];
