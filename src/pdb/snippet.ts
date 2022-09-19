/**
 * Class for parsing a given column (snippet) in a PDB file and returning it
 * in the correct format.
 */

export default class Snippet {
  private text: string;

  static getSnippetType(rawSnippet: string): string {
    return rawSnippet
      .substring(0, Math.min(5, rawSnippet.length))
      .trim()
      .toUpperCase();
  }

  constructor(rawSnippet: string, columnStart: number, columnEnd: number) {
    if (rawSnippet.trim().length === 0) {
      throw new Error('snippet is empty.');
    }

    if (columnStart < 1) {
      throw new Error('columnStart should be greater than 0.');
    }

    if (columnStart > columnEnd) {
      throw new Error('columnStart should be less or equal to columnEnd.');
    }

    if (columnEnd > rawSnippet.length) {
      throw new Error(
        'columnEnd should be less than the length of the rawSnippet.'
      );
    }

    this.text = rawSnippet.substring(columnStart - 1, columnEnd).trim();
  }

  toInteger(): number {
    return parseInt(this.text, 10);
  }

  toReal(): number {
    return parseFloat(this.text);
  }

  toCharacter(): string {
    return this.text.trim().toString();
  }
}
