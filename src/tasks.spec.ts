import {
  numOfLargerMeasurements,
  numOfLargerMeasurementsAdvanced
} from './tasks';

import {
  getNumArrayFromInputData
} from './data';

describe('Tests for Advent Of Coding 2021.', () => {
  describe('Tests for Day 1', () => {
    const input = ['199', '200', '208', '210', '200', '207', '240', '269', '260', '263'];
    const measurements = getNumArrayFromInputData(input);

    it('Given 10 measurements, 7 should be larger than the previous measurement', () => {
      const expected = 7;
      const result = numOfLargerMeasurements(measurements);
      expect(result).toBe(expected);
    });

    it('Given 10 measurements, 5 should be larger than the previous measurement', () => {
      const expected = 5;
      const result = numOfLargerMeasurementsAdvanced(measurements);
      expect(result).toBe(expected);
    });
  });

});
