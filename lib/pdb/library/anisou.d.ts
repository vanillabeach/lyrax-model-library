/**
 * The ANISOU records present the anisotropic temperature factors.
 *
 * Definitions can be found at https://bit.ly/3A2ZCHX
 */
import { PDBEnums } from '../pdb_element';
import PDBPrimitive from '../pdb_primitive';
export declare type AnisouArgs = {
    id: string;
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
};
export default class Anisou extends PDBPrimitive {
    readonly id: string;
    readonly serialNumber?: number;
    readonly name?: string;
    readonly alternateLocation?: string;
    readonly residueName?: string;
    readonly chainIdentifier?: string;
    readonly residueSequenceNumber?: number;
    readonly insertionCode?: string;
    readonly u_0_0?: number;
    readonly u_1_1?: number;
    readonly u_2_2?: number;
    readonly u_0_1?: number;
    readonly u_0_2?: number;
    readonly u_1_2?: number;
    readonly element?: string;
    readonly charge?: string;
    constructor(args: AnisouArgs);
    static type: PDBEnums;
    static fromPDBFileEntry(args: {
        id: string;
        rawData: string;
    }): Anisou;
    getType(): PDBEnums;
}
