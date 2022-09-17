/**
 * The CONECT records specify connectivity between atoms for which coordinates are
 * supplied. The connectivity is described using the atom serial number as shown in
 * the entry. CONECT records are mandatory for HET groups (excluding water) and for
 * other bonds not specified in the standard residue connectivity table. These records
 * are generated automatically.
 *
 * Definitions can be found at https://bit.ly/3P0OWPu
 */
import PDBPrimitive from '../pdb_primitive';
export declare type ConectArgs = {
    rawData?: string;
};
export default class Conect extends PDBPrimitive {
    serial1?: number;
    serial2?: number;
    serial3?: number;
    serial4?: number;
    serial5?: number;
    constructor(args: ConectArgs);
    getType(): string;
    parse(rawData: string): void;
}
