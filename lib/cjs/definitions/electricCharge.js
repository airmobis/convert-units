"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SI = {
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
const measure = {
    systems: {
        SI,
    },
};
exports.default = measure;
