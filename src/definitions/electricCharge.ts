import { Measure, Unit } from './../index.js';
export type ElectricChargeUnits = ElectricChargeSIUnits;
export type ElectricChargeSystems = 'SI';

export type ElectricChargeSIUnits = 'Ah' | 'mAh';

const SI: Record<ElectricChargeSIUnits, Unit> = {
  Ah: {
    name: {
      singular: 'Ampere-hour',
      plural: 'Ampere-hours',
    },
    to_anchor: 1,
  },
  mAh: {
    name: {
      singular: 'Milliampere-hour',
      plural: 'Milliampere-hours',
    },
    to_anchor: 1e-3,
  },
};

const measure: Measure<ElectricChargeSystems, ElectricChargeUnits> = {
  systems: {
    SI,
  },
};
export default measure;
