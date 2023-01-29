export enum BondRepresentation {
  singleColor,
  splitColor,
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

  constructor(args: BondArgs) {
    this.id = args.id;
    this.firstId = args.firstId;
    this.secondId = args.secondId;
    this.settings = args.settings;

    if (
      args.settings?.type === BondRepresentation.singleColor &&
      args.settings?.colorValue === undefined
    ) {
      throw Error(
        'You have specified a "single color" value for a bond but have not provided the color.'
      );
    }
  }
}
