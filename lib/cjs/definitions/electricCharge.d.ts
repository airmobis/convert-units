import { Measure } from './../index.js';
export type ElectricChargeUnits = ElectricChargeSIUnits;
export type ElectricChargeSystems = 'SI';
export type ElectricChargeSIUnits = 'Ah' | 'mAh';
declare const measure: Measure<ElectricChargeSystems, ElectricChargeUnits>;
export default measure;
