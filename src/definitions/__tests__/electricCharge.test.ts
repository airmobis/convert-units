import configureMeasurements from '../..';
import electricCharge, {
  ElectricChargeSystems,
  ElectricChargeUnits,
} from '../electricCharge';

test('Ah to Ah', () => {
  const convert = configureMeasurements<
    'electricCharge',
    ElectricChargeSystems,
    ElectricChargeUnits
  >({
    electricCharge,
  });
  expect(convert(1).from('Ah').to('Ah')).toBe(1);
});

test('mAh to mAh', () => {
  const convert = configureMeasurements<
    'electricCharge',
    ElectricChargeSystems,
    ElectricChargeUnits
  >({
    electricCharge,
  });
  expect(convert(1).from('mAh').to('mAh')).toBe(1);
});

test('Ah to mAh', () => {
  const convert = configureMeasurements<
    'electricCharge',
    ElectricChargeSystems,
    ElectricChargeUnits
  >({
    electricCharge,
  });
  expect(convert(1).from('Ah').to('mAh')).toBe(1000);
});

test('mAh to Ah', () => {
  const convert = configureMeasurements<
    'electricCharge',
    ElectricChargeSystems,
    ElectricChargeUnits
  >({
    electricCharge,
  });
  expect(convert(1).from('mAh').to('Ah')).toBe(0.001);
});
