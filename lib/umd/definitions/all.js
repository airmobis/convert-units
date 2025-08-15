(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./acceleration.js", "./angle.js", "./apparentPower.js", "./area.js", "./charge.js", "./current.js", "./digital.js", "./each.js", "./electricCharge.js", "./energy.js", "./force.js", "./frequency.js", "./illuminance.js", "./length.js", "./mass.js", "./massFlowRate.js", "./pace.js", "./partsPer.js", "./pieces.js", "./power.js", "./pressure.js", "./reactiveEnergy.js", "./reactivePower.js", "./speed.js", "./temperature.js", "./time.js", "./torque.js", "./voltage.js", "./volume.js", "./volumeFlowRate.js"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const acceleration_js_1 = require("./acceleration.js");
    const angle_js_1 = require("./angle.js");
    const apparentPower_js_1 = require("./apparentPower.js");
    const area_js_1 = require("./area.js");
    const charge_js_1 = require("./charge.js");
    const current_js_1 = require("./current.js");
    const digital_js_1 = require("./digital.js");
    const each_js_1 = require("./each.js");
    const electricCharge_js_1 = require("./electricCharge.js");
    const energy_js_1 = require("./energy.js");
    const force_js_1 = require("./force.js");
    const frequency_js_1 = require("./frequency.js");
    const illuminance_js_1 = require("./illuminance.js");
    const length_js_1 = require("./length.js");
    const mass_js_1 = require("./mass.js");
    const massFlowRate_js_1 = require("./massFlowRate.js");
    const pace_js_1 = require("./pace.js");
    const partsPer_js_1 = require("./partsPer.js");
    const pieces_js_1 = require("./pieces.js");
    const power_js_1 = require("./power.js");
    const pressure_js_1 = require("./pressure.js");
    const reactiveEnergy_js_1 = require("./reactiveEnergy.js");
    const reactivePower_js_1 = require("./reactivePower.js");
    const speed_js_1 = require("./speed.js");
    const temperature_js_1 = require("./temperature.js");
    const time_js_1 = require("./time.js");
    const torque_js_1 = require("./torque.js");
    const voltage_js_1 = require("./voltage.js");
    const volume_js_1 = require("./volume.js");
    const volumeFlowRate_js_1 = require("./volumeFlowRate.js");
    const allMeasures = {
        acceleration: acceleration_js_1.default,
        angle: angle_js_1.default,
        apparentPower: apparentPower_js_1.default,
        area: area_js_1.default,
        charge: charge_js_1.default,
        current: current_js_1.default,
        digital: digital_js_1.default,
        each: each_js_1.default,
        energy: energy_js_1.default,
        force: force_js_1.default,
        frequency: frequency_js_1.default,
        illuminance: illuminance_js_1.default,
        length: length_js_1.default,
        mass: mass_js_1.default,
        massFlowRate: massFlowRate_js_1.default,
        pace: pace_js_1.default,
        partsPer: partsPer_js_1.default,
        pieces: pieces_js_1.default,
        power: power_js_1.default,
        pressure: pressure_js_1.default,
        reactiveEnergy: reactiveEnergy_js_1.default,
        reactivePower: reactivePower_js_1.default,
        speed: speed_js_1.default,
        torque: torque_js_1.default,
        temperature: temperature_js_1.default,
        time: time_js_1.default,
        voltage: voltage_js_1.default,
        volume: volume_js_1.default,
        volumeFlowRate: volumeFlowRate_js_1.default,
        electricCharge: electricCharge_js_1.default,
    };
    exports.default = allMeasures;
});
