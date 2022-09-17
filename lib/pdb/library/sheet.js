"use strict";
/**
 * The SHEET record indicates the location, sense (anti-parallel, etc.) and
 * registration with respect to the previous strand in the sheet (if any) \
 * of each strand in the model. One record per strand.
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
var Sheet = /** @class */ (function (_super) {
    __extends(Sheet, _super);
    function Sheet(args) {
        var _this = _super.call(this) || this;
        if (args.rawData) {
            _this.parse(args.rawData);
        }
        return _this;
    }
    Sheet.prototype.getType = function () {
        return pdb_element_1.PDBEnums.Sheet;
    };
    Sheet.prototype.parse = function (rawData) {
        this.strandNumber = new snippet_1.default(rawData, 8, 10).toInteger();
        this.identifier = new snippet_1.default(rawData, 12, 14).toCharacter();
        this.numberOfStrands = new snippet_1.default(rawData, 15, 16).toInteger();
        this.initialResidueName = new snippet_1.default(rawData, 18, 20).toCharacter();
        this.firstChainIdentifier = new snippet_1.default(rawData, 22, 22).toCharacter();
        this.firstResidueSequenceNumber = new snippet_1.default(rawData, 23, 26).toInteger();
        this.firstCodeForInsertionsOfResidues = new snippet_1.default(rawData, 27, 27).toCharacter();
        this.firstTerminalResidueName = new snippet_1.default(rawData, 29, 31).toCharacter();
        this.secondChainIdentifier = new snippet_1.default(rawData, 33, 33).toCharacter();
        this.secondResidueSequenceNumber = new snippet_1.default(rawData, 34, 37).toInteger();
        this.secondCodeForInsertionsOfResidues = new snippet_1.default(rawData, 38, 38).toCharacter();
        this.strandSenseWithRespectToPrevious = new snippet_1.default(rawData, 39, 40).toInteger();
        this.firstAtomName = new snippet_1.default(rawData, 42, 45).toCharacter();
        this.firstAtomResidueName = new snippet_1.default(rawData, 46, 48).toCharacter();
        this.firstAtomChainIdentifier = new snippet_1.default(rawData, 50, 50).toCharacter();
        this.firstAtomResidueSequenceNumber = new snippet_1.default(rawData, 51, 54).toInteger();
        this.firstAtomCodeForInsertionsOfResidue = new snippet_1.default(rawData, 55, 55).toCharacter();
        this.secondAtomName = new snippet_1.default(rawData, 57, 60).toCharacter();
        this.secondAtomResidueName = new snippet_1.default(rawData, 61, 63).toCharacter();
        this.secondAtomChainIdentifier = new snippet_1.default(rawData, 65, 65).toCharacter();
        this.secondAtomResidueSequenceNumber = new snippet_1.default(rawData, 66, 69).toInteger();
        this.secondAtomCodeForInsertionsOfResidue = new snippet_1.default(rawData, 70, 70).toCharacter();
    };
    return Sheet;
}(pdb_primitive_1.default));
exports.default = Sheet;
