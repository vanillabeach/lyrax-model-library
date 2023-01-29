"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const atom_1 = require("../pdb/library/atom");
const conect_1 = require("../pdb/library/conect");
const bond_1 = require("./bond");
class Molecule {
    constructor(args) {
        this.id = args.id;
        this.atoms = args.atoms || [];
        this.atomBonds = args.atomBonds || [];
        return this;
    }
    static fromPDBStructure(id, pdbStructure, coordinates) {
        const atoms = Object.values(this.getAtomsFromPDBStructure(pdbStructure));
        const atomBonds = Object.values(this.getAtomBondsFromPDBStructure(pdbStructure)).flat(1);
        return new Molecule({
            id,
            coordinates,
            atoms,
            atomBonds,
        });
    }
    addAtom(atom) {
        this.atoms.push(atom);
        return this;
    }
    addAtoms(atom) {
        this.atoms.push(...atom);
        return this;
    }
    addAtomBond(atom1, atom2, settings) {
        const id = `bondsMap${Object.keys(this.atomBonds).length}`;
        const bond = new bond_1.default({
            id: `${id}_${atom1.id}_${atom2.id}`,
            firstId: atom1.id,
            secondId: atom2.id,
            settings: settings,
        });
        this.atomBonds.push(bond);
        return this;
    }
    addAtomBonds(bonds) {
        this.atomBonds.push(...bonds);
        return this;
    }
    getAtom(id) {
        const result = this.atoms.filter((x) => x.id === id);
        return result.length === 0 ? null : result[0];
    }
    getAtomBond(id) {
        const result = this.atomBonds.filter((x) => x.id === id);
        return result.length === 0 ? null : result[0];
    }
    static getTheDistanceBetweenTwoAtoms(atom1, atom2) {
        let x1 = atom1.xOrthogonalCoordinate;
        let y1 = atom1.yOrthogonalCoordinate;
        let z1 = atom1.zOrthogonalCoordinate;
        let x2 = atom2.xOrthogonalCoordinate;
        let y2 = atom2.yOrthogonalCoordinate;
        let z2 = atom2.zOrthogonalCoordinate;
        if (x1 === undefined || y1 === undefined || z1 === undefined) {
            return null;
        }
        if (x2 === undefined || y2 === undefined || z2 === undefined) {
            return null;
        }
        return Math.sqrt(Math.abs(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2) + Math.pow((z2 - z1), 2)));
    }
    static getAtomsListFromPDBStructure(pdbStructure) {
        return pdbStructure
            .getEntries()
            .filter((x) => x.getType() === atom_1.default.type)
            .map((x) => x);
    }
    static getAtomsFromPDBStructure(pdbStructure) {
        const atomsMap = {};
        this.getAtomsListFromPDBStructure(pdbStructure).forEach((entry) => {
            atomsMap[entry.id] = entry;
        });
        return atomsMap;
    }
    static getAtomBondsFromPDBStructure(pdbStructure) {
        const conectsList = pdbStructure
            .getEntries()
            .filter((x) => x.getType() === conect_1.default.type)
            .map((x) => x);
        const atomsBySerialNumber = {};
        this.getAtomsListFromPDBStructure(pdbStructure).forEach((entry) => {
            if (entry.serialNumber !== undefined && entry.serialNumber > 0) {
                atomsBySerialNumber[entry.serialNumber] = entry;
            }
        });
        const bondsMap = {};
        let index = 0;
        const bondsId = (index, atom1Id, atom2Id) => `bondsMap${index}_${atom1Id}_${atom2Id}`;
        conectsList.forEach((entry) => {
            if (entry.serial1 !== undefined && entry.serial1 > 0) {
                const atom1 = atomsBySerialNumber[entry.serial1].id;
                const values = [];
                if (entry.serial2 !== undefined && entry.serial2 > 0) {
                    const atom2 = atomsBySerialNumber[entry.serial2].id;
                    values.push(new bond_1.default({
                        id: bondsId(index, atom1, atom2),
                        firstId: atom1,
                        secondId: atom2,
                    }));
                    index += 1;
                }
                if (entry.serial3 !== undefined && entry.serial3 > 0) {
                    const atom2 = atomsBySerialNumber[entry.serial3].id;
                    values.push(new bond_1.default({
                        id: bondsId(index, atom1, atom2),
                        firstId: atom1,
                        secondId: atom2,
                    }));
                    index += 1;
                }
                if (entry.serial4 !== undefined && entry.serial4 > 0) {
                    const atom2 = atomsBySerialNumber[entry.serial4].id;
                    values.push(new bond_1.default({
                        id: bondsId(index, atom1, atom2),
                        firstId: atom1,
                        secondId: atom2,
                    }));
                    index += 1;
                }
                if (entry.serial5 !== undefined && entry.serial5 > 0) {
                    const atom2 = atomsBySerialNumber[entry.serial5].id;
                    values.push(new bond_1.default({
                        id: bondsId(index, atom1, atom2),
                        firstId: atom1,
                        secondId: atom2,
                    }));
                    index += 1;
                }
                bondsMap[atom1] = values;
            }
        });
        return bondsMap;
    }
}
exports.default = Molecule;
