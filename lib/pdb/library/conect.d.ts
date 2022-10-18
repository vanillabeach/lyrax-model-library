/**
 * The CONECT records specify connectivity between atoms for which coordinates are
 * supplied. The connectivity is described using the atom serial number as shown in
 * the entry. CONECT records are mandatory for HET groups (excluding water) and for
 * other bonds not specified in the standard residue connectivity table. These records
 * are generated automatically.
 *
 * Definitions can be found at https://bit.ly/3P0OWPu
 */
import { PDBEnums } from '../pdb_element';
import PDBPrimitive from '../pdb_primitive';
export declare type ConectArgs = {
    id: string;
    serial1?: number;
    serial2?: number;
    serial3?: number;
    serial4?: number;
    serial5?: number;
};
export default class Conect extends PDBPrimitive {
    readonly id: string;
    readonly serial1?: number;
    readonly serial2?: number;
    readonly serial3?: number;
    readonly serial4?: number;
    readonly serial5?: number;
    constructor(args: ConectArgs);
    static type: PDBEnums;
    static fromPDBFileEntry(args: {
        id: string;
        rawData: string;
    }): Conect;
    getType(): PDBEnums;
}
