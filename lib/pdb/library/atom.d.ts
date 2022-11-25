/**
 * Atomic coordinate record containing the X,Y,Z orthogonal Å coordinates for
 * atoms in standard residues (amino acids and nucleic acids).
 *
 * Definitions can be found at https://bit.ly/3BIPnv1
 */
import { PDBEnums } from "../pdb_element";
import PDBPrimitive from "../pdb_primitive";
export declare type AtomArgs = {
    id: string;
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
};
export default class Atom extends PDBPrimitive {
    readonly id: string;
    readonly serialNumber?: number;
    readonly name?: string;
    readonly alternateLocationIndicator?: string;
    readonly residueName?: string;
    readonly chainIdentifier?: string;
    readonly residueSequenceNumber?: number;
    readonly codeForInsertionsOfResidue?: string;
    readonly xOrthogonalCoordinate?: number;
    readonly yOrthogonalCoordinate?: number;
    readonly zOrthogonalCoordinate?: number;
    readonly occupancy?: number;
    readonly temperatureFactor?: number;
    readonly segmentIdentifier?: string;
    readonly elementSymbol?: string;
    readonly charge?: string;
    constructor(args: AtomArgs);
    static type: PDBEnums;
    static fromPDBFileEntry(args: {
        id: string;
        rawData: string;
    }): Atom;
    getCapitalizedName(): string;
    getCPKColor(): number[];
    getElement(): string;
    getType(): PDBEnums;
}
