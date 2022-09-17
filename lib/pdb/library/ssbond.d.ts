/**
 * The SSBOND record defines disulfide bond linkages between
 * cysteine residues.
 *
 * Definitions can be found at https://bit.ly/3ptKnTu
 */
import PDBPrimitive from '../pdb_primitive';
export declare type SSBondArgs = {
    rawData?: string;
};
export default class SSBond extends PDBPrimitive {
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
    constructor(args: SSBondArgs);
    getType(): string;
    parse(rawData: string): void;
}
