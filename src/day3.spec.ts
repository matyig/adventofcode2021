import { powerConsumption, lifeSupportRating, getBinaryArrayFromInputData } from './day3';

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
