"use strict";
/**
 * Atomic coordinate record containing the X,Y,Z orthogonal Å coordinates
 * for atoms in nonstandard residues. Nonstandard residues include inhibitors,
 * cofactors, ions, and solvent.
 *
 * The only functional difference from ATOM records is that HETATM residues
 * are by default not connected to other residues. Note that water residues
 * should be in HETATM records.
 *
 * Definitions can be found at https://bit.ly/3BIPnv1
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var atom_1 = require("./atom");
var pdb_element_1 = require("../pdb_element");
var HetAtm = /** @class */ (function (_super) {
    __extends(HetAtm, _super);
    function HetAtm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HetAtm.prototype.getType = function () {
        return pdb_element_1.PDBEnums.HetAtm;
    };
    HetAtm.type = 'HETATM';
    return HetAtm;
}(atom_1.default));
exports.default = HetAtm;
