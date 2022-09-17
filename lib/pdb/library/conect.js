"use strict";
/**
 * The CONECT records specify connectivity between atoms for which coordinates are
 * supplied. The connectivity is described using the atom serial number as shown in
 * the entry. CONECT records are mandatory for HET groups (excluding water) and for
 * other bonds not specified in the standard residue connectivity table. These records
 * are generated automatically.
 *
 * Definitions can be found at https://bit.ly/3P0OWPu
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
var pdb_element_1 = require("../pdb_element");
var pdb_primitive_1 = require("../pdb_primitive");
var snippet_1 = require("../snippet");
var Conect = /** @class */ (function (_super) {
    __extends(Conect, _super);
    function Conect(args) {
        var _this = _super.call(this) || this;
        if (args.rawData) {
            _this.parse(args.rawData);
        }
        return _this;
    }
    Conect.prototype.getType = function () {
        return pdb_element_1.PDBEnums.Conect;
    };
    Conect.prototype.parse = function (rawData) {
        this.serial1 = new snippet_1.default(rawData, 7, 11).toInteger();
        this.serial2 = new snippet_1.default(rawData, 12, 16).toInteger();
        this.serial3 = new snippet_1.default(rawData, 17, 21).toInteger();
        this.serial4 = new snippet_1.default(rawData, 22, 26).toInteger();
        this.serial5 = new snippet_1.default(rawData, 27, 31).toInteger();
    };
    return Conect;
}(pdb_primitive_1.default));
exports.default = Conect;
