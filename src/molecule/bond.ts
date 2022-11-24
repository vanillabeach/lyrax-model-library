export type BondSettings = {
  color?: number[];
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
  }
}
