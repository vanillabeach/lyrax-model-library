/**
 * The HELIX record indicates the location and type (right-handed alpha, etc.)
 * of helices. One record per helix.
 *
 * Definitions can be found at https://bit.ly/3ptKnTu
 */
import { PDBEnums } from '../pdb_element';
import PDBPrimitive from '../pdb_primitive';
export type HelixArgs = {
    id: string;
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
};
export default class Helix extends PDBPrimitive {
    readonly id: string;
    readonly serialNumber?: number;
    readonly identifier?: string;
    readonly initialResidueName?: string;
    readonly firstChainIdentifier?: string;
    readonly firstResidueSequenceNumber?: number;
    readonly firstCodeForInsertionsOfResidues?: string;
    readonly firstTerminalResidueName?: string;
    readonly secondChainIdentifier?: string;
    readonly secondResidueSequenceNumber?: number;
    readonly secondCodeForInsertionsOfResidues?: string;
    readonly typeOfHelix?: number;
    readonly comment?: string;
    readonly lengthOfHelix?: string;
    constructor(args: HelixArgs);
    static type: PDBEnums;
    static fromPDBFileEntry(args: {
        id: string;
        rawData: string;
    }): Helix;
    getType(): PDBEnums;
}
