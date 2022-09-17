/**
 * Atomic coordinate record containing the X,Y,Z orthogonal Å coordinates for
 * atoms in standard residues (amino acids and nucleic acids).
 *
 * Definitions can be found at https://bit.ly/3BIPnv1
 */
import PDBPrimitive from '../pdb_primitive';
export declare type AtomArgs = {
    rawData?: string;
};
export default class Atom extends PDBPrimitive {
    serialNumber?: number;
    name?: string;
    alternateLocationIndicator?: string;
    residueName?: string;
    chainIdentifier?: string;
    residueSequenceNumber?: number;
    codeForInsertionsOfResidue?: string;
    xOrthogonalCoordinate?: number;
    yOrthogonalCoordinate?: number;
    zOrthogonalCoordinate?: number;
    occupancy?: number;
    temperatureFactor?: number;
    segmentIdentifier?: string;
    elementSymbol?: string;
    charge?: string;
    constructor(args: AtomArgs);
    getCapitalizedName(): string;
    getElement(): string;
    getCPKColor(): number[];
    getType(): string;
    parse(rawData: string): void;
}
