/**
 * Indicates the end of a chain of residues. For example, a hemoglobin molecule
 * consists of four subunit chains that are not connected. TER indicates the end
 * of a chain and prevents the display of a connection to the next chain.
 *
 * Definitions can be found at https://bit.ly/3BIPnv1
 */
import PDBPrimitive from '../pdb_primitive';
export declare type TerArgs = {
    rawData?: string;
};
export default class Ter extends PDBPrimitive {
    serialNumber?: number;
    residueName?: string;
    chainIdentifier?: string;
    residueSequenceNumber?: number;
    codeForInsertionsOfResidue?: string;
    constructor(args: TerArgs);
    static type: string;
    getType(): string;
    parse(rawData: string): void;
}
