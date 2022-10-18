export declare type CoordinatesIn3DArgs = {
    x: number;
    y: number;
    z: number;
};
export declare class CoordinatesIn3D {
    x: number;
    y: number;
    z: number;
    constructor(args: CoordinatesIn3DArgs);
    static fromArray(array: number[]): CoordinatesIn3D;
}
