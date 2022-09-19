export type CoordinatesIn3DArgs = {
  x: number;
  y: number;
  z: number;
};

export class CoordinatesIn3D {
  x: number;
  y: number;
  z: number;

  constructor(args: CoordinatesIn3DArgs) {
    this.x = args.x;
    this.y = args.y;
    this.z = args.z;
  }

  static fromArray(array: number[]): CoordinatesIn3D {
    if (array.length != 3) {
      throw Error('Co-ordinate array must contain exactly 3 entries.');
    }

    return new CoordinatesIn3D({
      x: array[0],
      y: array[1],
      z: array[2],
    });
  }
}
