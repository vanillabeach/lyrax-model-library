/**
 * The ANISOU records present the anisotropic temperature factors.
 *
 * Definitions can be found at https://bit.ly/3A2ZCHX
 */
import { PDBEnums } from '../pdb_element';
import PDBPrimitive from '../pdb_primitive';
export declare type AnisouArgs = {
    rawData?: string;
};
export default class Anisou extends PDBPrimitive {
    serialNumber?: number;
    name?: string;
    alternateLocation?: string;
    residueName?: string;
    chainIdentifier?: string;
    residueSequenceNumber?: number;
    insertionCode?: string;
    u_0_0?: number;
    u_1_1?: number;
    u_2_2?: number;
    u_0_1?: number;
    u_0_2?: number;
    u_1_2?: number;
    element?: string;
    charge?: string;
    constructor(args: AnisouArgs);
    getType(): PDBEnums;
    parse(rawData: string): void;
}
