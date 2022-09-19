export default class PDBPrimitive {
  getId(): string {
    throw new Error(
      'getId() has not been implemented for this PDB Primitive class.'
    );
  }

  getType(): Object {
    throw new Error(
      'getType() has not been implemented for this PDB Primitive class.'
    );
  }

  parse(rawData: string): void {
    throw new Error(
      'parse() has not been implemented for this PDB Primitive class.'
    );
  }
}
