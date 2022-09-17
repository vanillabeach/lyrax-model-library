"use strict";
/**
 * The SSBOND record defines disulfide bond linkages between
 * cysteine residues.
 *
 * Definitions can be found at https://bit.ly/3ptKnTu
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
var SSBond = /** @class */ (function (_super) {
    __extends(SSBond, _super);
    function SSBond(args) {
        var _this = _super.call(this) || this;
        if (args.rawData) {
            _this.parse(args.rawData);
        }
        return _this;
    }
    SSBond.prototype.getType = function () {
        return pdb_element_1.PDBEnums.SSBond;
    };
    SSBond.prototype.parse = function (rawData) {
        this.serialNumber = new snippet_1.default(rawData, 8, 10).toInteger();
        this.firstResidueName = new snippet_1.default(rawData, 12, 14).toCharacter();
        this.firstChainIdentifier = new snippet_1.default(rawData, 16, 16).toCharacter();
        this.firstResidueSequenceNumber = new snippet_1.default(rawData, 18, 21).toInteger();
        this.firstCodeForInsertionsOfResidues = new snippet_1.default(rawData, 22, 22).toCharacter();
        this.secondResidueName = new snippet_1.default(rawData, 26, 28).toCharacter();
        this.secondChainIdentifier = new snippet_1.default(rawData, 30, 30).toCharacter();
        this.secondResidueSequenceNumber = new snippet_1.default(rawData, 32, 35).toInteger();
        this.secondCodeForInsertionsOfResidues = new snippet_1.default(rawData, 36, 36).toCharacter();
        this.symmetryOperatorForFirstResidue = new snippet_1.default(rawData, 60, 65).toInteger();
        this.symmetryoperatorForSecondResidue = new snippet_1.default(rawData, 67, 72).toInteger();
        this.lengthOfDisulfideBond = new snippet_1.default(rawData, 74, 78).toReal();
    };
    return SSBond;
}(pdb_primitive_1.default));
exports.default = SSBond;
