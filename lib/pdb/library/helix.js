"use strict";
/**
 * The HELIX record indicates the location and type (right-handed alpha, etc.)
 * of helices. One record per helix.
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
var Helix = /** @class */ (function (_super) {
    __extends(Helix, _super);
    function Helix(args) {
        var _this = _super.call(this) || this;
        if (args.rawData) {
            _this.parse(args.rawData);
        }
        return _this;
    }
    Helix.prototype.getType = function () {
        return pdb_element_1.PDBEnums.Helix;
    };
    Helix.prototype.parse = function (rawData) {
        this.serialNumber = new snippet_1.default(rawData, 8, 10).toInteger();
        this.identifier = new snippet_1.default(rawData, 12, 14).toCharacter();
        this.initialResidueName = new snippet_1.default(rawData, 16, 18).toCharacter();
        this.firstChainIdentifier = new snippet_1.default(rawData, 20, 20).toCharacter();
        this.firstResidueSequenceNumber = new snippet_1.default(rawData, 22, 25).toInteger();
        this.firstCodeForInsertionsOfResidues = new snippet_1.default(rawData, 26, 26).toCharacter();
        this.firstTerminalResidueName = new snippet_1.default(rawData, 28, 30).toCharacter();
        this.secondChainIdentifier = new snippet_1.default(rawData, 32, 32).toCharacter();
        this.secondResidueSequenceNumber = new snippet_1.default(rawData, 34, 37).toInteger();
        this.secondCodeForInsertionsOfResidues = new snippet_1.default(rawData, 38, 38).toCharacter();
        this.typeOfHelix = new snippet_1.default(rawData, 39, 40).toInteger();
        this.comment = new snippet_1.default(rawData, 41, 70).toCharacter();
        this.lengthOfHelix = new snippet_1.default(rawData, 72, 76).toCharacter();
    };
    return Helix;
}(pdb_primitive_1.default));
exports.default = Helix;
