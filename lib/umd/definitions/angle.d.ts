import { Measure } from './../index.js';
export type AngleUnits = AngleSIUnits;
export type AngleSystems = 'SI';
export type AngleSIUnits = 'rad' | 'deg' | 'grad' | 'arcmin' | 'arcsec' | 'slope';
declare const measure: Measure<AngleSystems, AngleUnits>;
export default measure;
//# sourceMappingURL=angle.d.ts.map