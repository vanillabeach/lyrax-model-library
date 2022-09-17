"use strict";
/**
 * Indicates the end of a chain of residues. For example, a hemoglobin molecule
 * consists of four subunit chains that are not connected. TER indicates the end
 * of a chain and prevents the display of a connection to the next chain.
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
var pdb_element_1 = require("../pdb_element");
var pdb_primitive_1 = require("../pdb_primitive");
var snippet_1 = require("../snippet");
var Ter = /** @class */ (function (_super) {
    __extends(Ter, _super);
    function Ter(args) {
        var _this = _super.call(this) || this;
        if (args.rawData) {
            _this.parse(args.rawData);
        }
        return _this;
    }
    Ter.prototype.getType = function () {
        return pdb_element_1.PDBEnums.Ter;
    };
    Ter.prototype.parse = function (rawData) {
        this.serialNumber = new snippet_1.default(rawData, 7, 11).toInteger();
        this.residueName = new snippet_1.default(rawData, 18, 20).toCharacter();
        this.chainIdentifier = new snippet_1.default(rawData, 22, 22).toCharacter();
        this.residueSequenceNumber = new snippet_1.default(rawData, 23, 26).toInteger();
        this.codeForInsertionsOfResidue = new snippet_1.default(rawData, 27, 27).toCharacter();
    };
    Ter.type = 'TER';
    return Ter;
}(pdb_primitive_1.default));
exports.default = Ter;
