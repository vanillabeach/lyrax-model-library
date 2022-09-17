/**
 * The SHEET record indicates the location, sense (anti-parallel, etc.) and
 * registration with respect to the previous strand in the sheet (if any) \
 * of each strand in the model. One record per strand.
 *
 * Definitions can be found at https://bit.ly/3ptKnTu
 */
import PDBPrimitive from '../pdb_primitive';
export declare type SheetArgs = {
    rawData?: string;
};
export default class Sheet extends PDBPrimitive {
    strandNumber?: number;
    identifier?: string;
    numberOfStrands?: number;
    initialResidueName?: string;
    firstChainIdentifier?: string;
    firstResidueSequenceNumber?: number;
    firstCodeForInsertionsOfResidues?: string;
    firstTerminalResidueName?: string;
    secondChainIdentifier?: string;
    secondResidueSequenceNumber?: number;
    secondCodeForInsertionsOfResidues?: string;
    strandSenseWithRespectToPrevious?: number;
    firstAtomName?: string;
    firstAtomResidueName?: string;
    firstAtomChainIdentifier?: string;
    firstAtomResidueSequenceNumber?: number;
    firstAtomCodeForInsertionsOfResidue?: string;
    secondAtomName?: string;
    secondAtomResidueName?: string;
    secondAtomChainIdentifier?: string;
    secondAtomResidueSequenceNumber?: number;
    secondAtomCodeForInsertionsOfResidue?: string;
    constructor(args: SheetArgs);
    getType(): string;
    parse(rawData: string): void;
}
