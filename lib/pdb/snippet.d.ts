/**
 * Class for parsing a given column (snippet) in a PDB file and returning it
 * in the correct format.
 */
export default class Snippet {
    private text;
    static getSnippetType(rawSnippet: string): string;
    constructor(rawSnippet: string, columnStart: number, columnEnd: number);
    toInteger(): number;
    toReal(): number;
    toCharacter(): string;
}
