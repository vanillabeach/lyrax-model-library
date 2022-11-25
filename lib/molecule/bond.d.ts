export declare type BondSettings = {
    color?: number[];
};
export declare type BondArgs = {
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
