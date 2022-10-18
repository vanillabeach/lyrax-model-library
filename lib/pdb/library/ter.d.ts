/**
 * Indicates the end of a chain of residues. For example, a hemoglobin molecule
 * consists of four subunit chains that are not connected. TER indicates the end
 * of a chain and prevents the display of a connection to the next chain.
 *
 * Definitions can be found at https://bit.ly/3BIPnv1
 */
import { PDBEnums } from '../pdb_element';
import PDBPrimitive from '../pdb_primitive';
export declare type TerArgs = {
    id: string;
    serialNumber?: number;
    residueName?: string;
    chainIdentifier?: string;
    residueSequenceNumber?: number;
    codeForInsertionsOfResidue?: string;
};
export default class Ter extends PDBPrimitive {
    readonly id: string;
    readonly serialNumber?: number;
    readonly residueName?: string;
    readonly chainIdentifier?: string;
    readonly residueSequenceNumber?: number;
    readonly codeForInsertionsOfResidue?: string;
    constructor(args: TerArgs);
    static type: PDBEnums;
    static fromPDBFileEntry(args: {
        id: string;
        rawData: string;
    }): Ter;
    getType(): PDBEnums;
}
