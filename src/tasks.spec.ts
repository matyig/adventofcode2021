import {
  numOfLargerMeasurements,
  numOfLargerMeasurementsAdvanced,
  finalDepth,
  finalDepthAdvanced,
  powerConsumption,
  lifeSupportRating,
  transpose,
  rowOfMatrix,
  columnOfMatrix,
  isTableWinner,
  isBingoNummerWinner,
  findFirstWinnerNumber,
  findFirstWinnerTable,
  getFinalScore,
  sumOfUnmarkedNumber,
  firstWinnerScore
} from './tasks';

import {
  getNumArrayFromInputData,
  getCommandArrayFromInputData,
  getBinaryArrayFromInputData,
  getBingoDataFromInputData,      
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

  describe('Tests for Day 4', () => {
    const input = [
      '7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1',
      '',
      '22 13 17 11  0',
      ' 8  2 23  4 24',
      '21  9 14 16  7',
      ' 6 10  3 18  5',
      ' 1 12 20 15 19',
      '',
      ' 3 15  0  2 22',
      ' 9 18 13 17  5',
      '19  8  7 25 23',
      '20 11 10 24  4',
      '14 21 16 12  6',
      '',
      '14 21 17 24  4',
      '10 16 15  9 19',
      '18  8 23 26 20',
      '22 11 13  6  5',
      ' 2  0 12  3  7',
    ];   
    const bingoData = getBingoDataFromInputData(input);

    it('Given an 5x5 matrix, the transpose should be the flipped matrix', () => {
      const expected = [
        [22,8,21,6,1],
        [13,2,9,10,12],
        [17,23,14,3,20],
        [11,4,16,18,15],
        [0,24,7,5,19]
      ];

      const result = transpose(bingoData.tables[0]);
      expect(result).toStrictEqual(expected);
    });

    it('Given an 5x5 matrix, the first row of the first matrix should be', () => {
      const expected = [22,13,17,11,0];

      const result = rowOfMatrix(bingoData.tables[0], 0);
      expect(result).toStrictEqual(expected);
    });

    it('Given an 5x5 matrix, the first column of the first matrix should be', () => {
      const expected = [22,8,21,6,1];

      const result = columnOfMatrix(bingoData.tables[0], 0);
      expect(result).toStrictEqual(expected);
    });

    it('Given an 5x5 matrix and some numbers, the matrix should not be winner', () => {
      const bingoNumbers = [7,4,9,5,11];
      const expected = false;

      const result = isTableWinner(bingoData.tables[0], bingoNumbers);
      expect(result).toStrictEqual(expected);
    });

    it('Given an 5x5 matrix and some numbers, the matrix should be winner', () => {
      const bingoNumbers = [7,4,9,5,11,17,23,2,0,14,21,24];
      const expected = true;

      const result = isTableWinner(bingoData.tables[2], bingoNumbers);
      expect(result).toStrictEqual(expected);
    });

    it('Given an 5x5 matrix and some numbers, the sum offinal score should be 4512', () => {      
      const bingoNumbers = [7,4,9,5,11,17,23,2,0,14,21,24];
      const winnerMatrix = [
        [14,21,17,24,4],
        [10,16,15,9,19],
        [18,8,23,26,20],
        [22,11,13,6,5],
        [2,0,12,3,7]
      ];  
      const expected = 4512;
      const result = sumOfUnmarkedNumber(winnerMatrix,bingoNumbers);
      expect(result).toBe(expected);
    });

    it('Given 3 bingo boards and some numbers, the number 5 should not be a winner', () => {
      const displayedNumberIndex = 4;
      const expected = false;
      const result = isBingoNummerWinner(bingoData, displayedNumberIndex);
      expect(result).toStrictEqual(expected);
    });

    it('Given 3 bingo boards and some numbers, the number 12 should not be a winner', () => {
      const displayedNumberIndex = 11;
      const expected = true;
      const result = isBingoNummerWinner(bingoData, displayedNumberIndex);
      expect(result).toStrictEqual(expected);
    });

    it('Given 3 bingo boards and some displayed number, the first winner should be the 12-ste number', () => {
      const expected = 11;
      const result = findFirstWinnerNumber(bingoData);
      expect(result).toStrictEqual(expected);
    });

    it('Given 3 bingo boards and some displayed number, the third table should win after the 12-ste number appear', () => {
      const displayedNumberIndex = 11;
      const expected = 2;
      const result = findFirstWinnerTable(bingoData, displayedNumberIndex);
      expect(result).toStrictEqual(expected);
    });

    it('Given 3 bingo boards, the final score be 4512 if the 12-ste number appear', () => {
      const expected = 4512;
      const result = firstWinnerScore(bingoData);
      expect(result).toBe(expected);
    });

    it('Given 3 bingo boards, the final score be 4512 if the 12-ste number appear', () => {
      const displayedNumberIndex = 11;
      const winnerTableIndex = 2;
      const expected = 4512;
      const result = getFinalScore(bingoData, displayedNumberIndex, winnerTableIndex);
      expect(result).toBe(expected);
    });

  });

});
