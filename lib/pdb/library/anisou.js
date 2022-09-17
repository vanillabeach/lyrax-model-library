"use strict";
/**
 * The ANISOU records present the anisotropic temperature factors.
 *
 * Definitions can be found at https://bit.ly/3A2ZCHX
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
var Anisou = /** @class */ (function (_super) {
    __extends(Anisou, _super);
    function Anisou(args) {
        var _this = _super.call(this) || this;
        if (args.rawData) {
            _this.parse(args.rawData);
        }
        return _this;
    }
    Anisou.prototype.getType = function () {
        return pdb_element_1.PDBEnums.Anisou;
    };
    Anisou.prototype.parse = function (rawData) {
        this.serialNumber = new snippet_1.default(rawData, 7, 11).toInteger();
        this.name = new snippet_1.default(rawData, 13, 16).toCharacter();
        this.alternateLocation = new snippet_1.default(rawData, 17, 17).toCharacter();
        this.residueName = new snippet_1.default(rawData, 18, 20).toCharacter();
        this.chainIdentifier = new snippet_1.default(rawData, 22, 22).toCharacter();
        this.residueSequenceNumber = new snippet_1.default(rawData, 23, 26).toInteger();
        this.insertionCode = new snippet_1.default(rawData, 27, 27).toCharacter();
        this.u_0_0 = new snippet_1.default(rawData, 29, 35).toInteger();
        this.u_1_1 = new snippet_1.default(rawData, 36, 42).toInteger();
        this.u_2_2 = new snippet_1.default(rawData, 43, 49).toInteger();
        this.u_0_1 = new snippet_1.default(rawData, 50, 56).toInteger();
        this.u_0_2 = new snippet_1.default(rawData, 57, 63).toInteger();
        this.u_2_2 = new snippet_1.default(rawData, 64, 70).toInteger();
        this.element = new snippet_1.default(rawData, 77, 78).toCharacter();
        this.charge = new snippet_1.default(rawData, 79, 80).toCharacter();
    };
    return Anisou;
}(pdb_primitive_1.default));
exports.default = Anisou;
