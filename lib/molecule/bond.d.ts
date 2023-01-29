export declare enum BondRepresentation {
    singleColor = 0,
    splitColor = 1
}
export type BondSettings = {
    type: BondRepresentation;
    colorValue?: number[];
};
export type BondArgs = {
    id: string;
    firstId: string;
    secondId: string;
    settings?: BondSettings;
};
export default class Bond {
    id: string;
    firstId: string;
    secondId: string;
    settings?: BondSettings;
    constructor(args: BondArgs);
}
