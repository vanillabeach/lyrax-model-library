import { PDBElement } from "./pdb_element";
export type PDBParseSettings = {
    strictMode?: boolean;
    maxLineLength?: number;
};
export declare function parseTextFile(textFile: string, settings: PDBParseSettings, namespace?: string): PDBElement[];
