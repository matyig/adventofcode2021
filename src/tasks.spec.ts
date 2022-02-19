import {
  numOfLargerMeasurements,
  numOfLargerMeasurementsAdvanced,
  finalDepth,
  finalDepthAdvanced,
  powerConsumption,
  lifeSupportRating,    
} from './tasks';

import {
  getNumArrayFromInputData,
  getCommandArrayFromInputData,
  getBinaryArrayFromInputData,    
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

  describe('Tests for Day 2', () => {
    const input = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2'];
    const commands = getCommandArrayFromInputData(input);

    it('Given 6 commands, depth should be 150', () => {
      const expected = 150;
      const result = finalDepth(commands);
      expect(result).toBe(expected);
    });

    it('Given 6 commands, depth should be 900', () => {
      const expected = 900;
      const result = finalDepthAdvanced(commands);
      expect(result).toBe(expected);
    });
  });
  
  describe('Tests for Day 3', () => {
    const input = [
      '00100',
      '11110',
      '10110',
      '10111',
      '10101',
      '01111',
      '00111',
      '11100',
      '10000',
      '11001',
      '00010',
      '01010',
    ];
    const diagReport = getBinaryArrayFromInputData(input, 5);

    it('Given 12 diagnostic report line, power consumption should be 198', () => {
      const expected = 198;
      const result = powerConsumption(diagReport);
      expect(result).toBe(expected);
    });

    it('Given 12 diagnostic report line, life support rating rating should be 230', () => {
      const expected = 230;
      const result = lifeSupportRating(diagReport);
      expect(result).toBe(expected);
    });
  });  

});
