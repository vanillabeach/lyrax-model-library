"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = require("./snippet");
const validSnippetString = 'ATOM      1  C           0      -2.561   1.251  -0.000  0.00  0.00           C+0';
describe(snippet_1.default, () => {
    describe('Valid constructor', () => {
        test('toCharacter', () => {
            expect(new snippet_1.default(validSnippetString, 1, 4).toCharacter()).toEqual('ATOM');
        });
        test('toInteger', () => {
            expect(new snippet_1.default(validSnippetString, 11, 11).toInteger()).toEqual(1);
        });
        test('toReal', () => {
            expect(new snippet_1.default(validSnippetString, 33, 39).toReal()).toEqual(-2.561);
        });
    });
    describe('Invalid constructor', () => {
        test('Empty', () => {
            expect(() => {
                new snippet_1.default('', 1, 1);
            }).toThrowError();
            expect(() => {
                new snippet_1.default('    ', 1, 1);
            }).toThrowError();
        });
        test('Range', () => {
            expect(() => {
                new snippet_1.default(validSnippetString, -1, 1);
            }).toThrowError();
            expect(() => {
                new snippet_1.default(validSnippetString, -10, -1);
            }).toThrowError();
            expect(() => {
                new snippet_1.default(validSnippetString, 1, 0);
            }).toThrowError();
            expect(() => {
                new snippet_1.default(validSnippetString, 10, 100);
            }).toThrowError();
            expect(() => {
                new snippet_1.default(validSnippetString, 100, 100);
            }).toThrowError();
        });
    });
    describe('Static Methods', () => {
        describe(snippet_1.default.getSnippetType, () => {
            expect(snippet_1.default.getSnippetType(validSnippetString)).toEqual('ATOM');
        });
    });
});
