import Anisou from './library/anisou';
import Atom from './library/atom';

export type PDBElement = Anisou | Atom;

export enum PDBEnums {
  Anisou = 'ANISOU',
  Atom = 'ATOM',
}
