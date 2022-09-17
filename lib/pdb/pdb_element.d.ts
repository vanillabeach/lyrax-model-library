import Anisou from './library/anisou';
import Atom from './library/atom';
import Conect from './library/conect';
import Helix from './library/helix';
import HetAtm from './library/hetatm';
import Sheet from './library/sheet';
import SSBond from './library/ssbond';
import Ter from './library/ter';
export declare type PDBElement = Anisou | Atom | Conect | Helix | HetAtm | Sheet | SSBond | Ter;
export declare enum PDBEnums {
    Anisou = "ANISOU",
    Atom = "ATOM",
    Conect = "CONECT",
    Helix = "HELIX",
    HetAtm = "HETATM",
    Sheet = "SHEET",
    SSBond = "SSBOND",
    Ter = "TER"
}
