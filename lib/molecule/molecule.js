"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Molecule {
    constructor(args) {
        this.id = args.id;
        this.pdbStructure = args.pdbStructure;
        if (args.coordinates) {
            this.coordinates = args.coordinates;
        }
    }
    get pdbEntries() {
        return this.pdbStructure.getEntries();
    }
}
exports.default = Molecule;
