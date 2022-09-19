import Snippet from './snippet';

const validSnippetString =
  'ATOM      1  C           0      -2.561   1.251  -0.000  0.00  0.00           C+0';

describe(Snippet, () => {
  describe('Valid constructor', () => {
    test('toCharacter', () => {
      expect(new Snippet(validSnippetString, 1, 4).toCharacter()).toEqual(
        'ATOM'
      );
    });

    test('toInteger', () => {
      expect(new Snippet(validSnippetString, 11, 11).toInteger()).toEqual(1);
    });

    test('toReal', () => {
      expect(new Snippet(validSnippetString, 33, 39).toReal()).toEqual(-2.561);
    });
  });

  describe('Invalid constructor', () => {
    test('Empty', () => {
      expect(() => {
        new Snippet('', 1, 1);
      }).toThrowError();

      expect(() => {
        new Snippet('    ', 1, 1);
      }).toThrowError();
    });

    test('Range', () => {
      expect(() => {
        new Snippet(validSnippetString, -1, 1);
      }).toThrowError();

      expect(() => {
        new Snippet(validSnippetString, -10, -1);
      }).toThrowError();

      expect(() => {
        new Snippet(validSnippetString, 1, 0);
      }).toThrowError();

      expect(() => {
        new Snippet(validSnippetString, 10, 100);
      }).toThrowError();

      expect(() => {
        new Snippet(validSnippetString, 100, 100);
      }).toThrowError();
    });
  });

  describe('Static Methods', () => {
    describe(Snippet.getSnippetType, () => {
      expect(Snippet.getSnippetType(validSnippetString)).toEqual('ATOM');
    });
  });
});
