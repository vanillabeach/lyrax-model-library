export default class PDBPrimitive {
    fromPDBFileEntry(args: {
        id: string;
        rawData: string;
    }): Object;
    getType(): Object;
    parse(rawData: string): void;
}
