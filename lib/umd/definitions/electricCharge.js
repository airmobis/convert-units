(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
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
});
