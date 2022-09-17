"use strict";
/**
 * General Text utility functions.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = void 0;
function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}
exports.capitalize = capitalize;
