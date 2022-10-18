/**
 * The SSBOND record defines disulfide bond linkages between
 * cysteine residues.
 *
 * Definitions can be found at https://bit.ly/3ptKnTu
 */
import { PDBEnums } from '../pdb_element';
import PDBPrimitive from '../pdb_primitive';
export declare type SSBondArgs = {
    id: string;
    serialNumber?: number;
    firstResidueName?: string;
    firstChainIdentifier?: string;
    firstResidueSequenceNumber?: number;
    firstCodeForInsertionsOfResidues?: string;
    secondResidueName?: string;
    secondChainIdentifier?: string;
    secondResidueSequenceNumber?: number;
    secondCodeForInsertionsOfResidues?: string;
    symmetryOperatorForFirstResidue?: number;
    symmetryoperatorForSecondResidue?: number;
    lengthOfDisulfideBond?: number;
};
export default class SSBond extends PDBPrimitive {
    readonly id: string;
    readonly serialNumber?: number;
    readonly firstResidueName?: string;
    readonly firstChainIdentifier?: string;
    readonly firstResidueSequenceNumber?: number;
    readonly firstCodeForInsertionsOfResidues?: string;
    readonly secondResidueName?: string;
    readonly secondChainIdentifier?: string;
    readonly secondResidueSequenceNumber?: number;
    readonly secondCodeForInsertionsOfResidues?: string;
    readonly symmetryOperatorForFirstResidue?: number;
    readonly symmetryoperatorForSecondResidue?: number;
    readonly lengthOfDisulfideBond?: number;
    constructor(args: SSBondArgs);
    static type: PDBEnums;
    static fromPDBFileEntry(args: {
        id: string;
        rawData: string;
    }): SSBond;
    getType(): PDBEnums;
}
