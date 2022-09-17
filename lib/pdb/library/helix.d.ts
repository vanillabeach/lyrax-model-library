/**
 * The HELIX record indicates the location and type (right-handed alpha, etc.)
 * of helices. One record per helix.
 *
 * Definitions can be found at https://bit.ly/3ptKnTu
 */
import PDBPrimitive from '../pdb_primitive';
export declare type HelixArgs = {
    rawData?: string;
};
export default class Helix extends PDBPrimitive {
    serialNumber?: number;
    identifier?: string;
    initialResidueName?: string;
    firstChainIdentifier?: string;
    firstResidueSequenceNumber?: number;
    firstCodeForInsertionsOfResidues?: string;
    firstTerminalResidueName?: string;
    secondChainIdentifier?: string;
    secondResidueSequenceNumber?: number;
    secondCodeForInsertionsOfResidues?: string;
    typeOfHelix?: number;
    comment?: string;
    lengthOfHelix?: string;
    constructor(args: HelixArgs);
    getType(): string;
    parse(rawData: string): void;
}
