/**
 * The SHEET record indicates the location, sense (anti-parallel, etc.) and
 * registration with respect to the previous strand in the sheet (if any) \
 * of each strand in the model. One record per strand.
 *
 * Definitions can be found at https://bit.ly/3ptKnTu
 */
import { PDBEnums } from '../pdb_element';
import PDBPrimitive from '../pdb_primitive';
export declare type SheetArgs = {
    id: string;
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
};
export default class Sheet extends PDBPrimitive {
    readonly id: string;
    readonly strandNumber?: number;
    readonly identifier?: string;
    readonly numberOfStrands?: number;
    readonly initialResidueName?: string;
    readonly firstChainIdentifier?: string;
    readonly firstResidueSequenceNumber?: number;
    readonly firstCodeForInsertionsOfResidues?: string;
    readonly firstTerminalResidueName?: string;
    readonly secondChainIdentifier?: string;
    readonly secondResidueSequenceNumber?: number;
    readonly secondCodeForInsertionsOfResidues?: string;
    readonly strandSenseWithRespectToPrevious?: number;
    readonly firstAtomName?: string;
    readonly firstAtomResidueName?: string;
    readonly firstAtomChainIdentifier?: string;
    readonly firstAtomResidueSequenceNumber?: number;
    readonly firstAtomCodeForInsertionsOfResidue?: string;
    readonly secondAtomName?: string;
    readonly secondAtomResidueName?: string;
    readonly secondAtomChainIdentifier?: string;
    readonly secondAtomResidueSequenceNumber?: number;
    readonly secondAtomCodeForInsertionsOfResidue?: string;
    constructor(args: SheetArgs);
    static type: PDBEnums;
    static fromPDBFileEntry(args: {
        id: string;
        rawData: string;
    }): Sheet;
    getId(): string;
    getType(): PDBEnums;
}
