import { Command, Bingo } from './types';

/**
 * Day 1
 */

export const numOfLargerMeasurements = (measurements: number[]) =>
  measurements.map((item, index, elements) => elements[index] < elements[index + 1]).filter((item) => item).length;

const sumNext3Items = (elements: number[], index: number) =>
  elements[index] + elements[index + 1] + elements[index + 2];

export const numOfLargerMeasurementsAdvanced = (measurements: number[]) =>
  measurements
    .map((item, index, elements) => sumNext3Items(elements, index) < sumNext3Items(elements, index + 1))
    .filter((item) => item).length;


/**
 * Day 2
 */

 const addDay2Commands = (data: Command[], operator: string) =>
 data
   .filter((command) => command.operator === operator)
   .map((command) => command.value)
   .reduce((a, b) => a + b, 0);

const horizontal = (commands: Command[]) => addDay2Commands(commands, 'forward');

const down = (commands: Command[]) => addDay2Commands(commands, 'down');

const up = (commands: Command[]) => addDay2Commands(commands, 'up');

export const finalDepth = (commands: Command[]) => horizontal(commands) * (down(commands) - up(commands));

const depth = (commands: Command[]) =>
 commands.reduce(
   (acc, command) => {
     if (command.operator.startsWith('down')) {
       acc.angle = acc.angle + command.value;
     } else if (command.operator.startsWith('up')) {
       acc.angle = acc.angle - command.value;
     } else if (command.operator.startsWith('forward')) {
       acc.depth = acc.depth + acc.angle * command.value;
     }
     return acc;
   },
   { depth: 0, angle: 0 },
 );

export const finalDepthAdvanced = (commands: Command[]) => horizontal(commands) * depth(commands).depth;


/**
 * Day 3
 */

 const binaryZero = (length: number) => Array(length).fill(0) as (0 | 1)[];

 const countOfBits = (diagnosticReport: number[][]) =>
   diagnosticReport.reduce(
     (acc, line) => line.map((digit, index) => acc[index] + digit),
     binaryZero(diagnosticReport[0].length),
   );
 
 const mostCommonBits = (diagnosticReport: number[][]) =>
   countOfBits(diagnosticReport).map((countOfBits) => (countOfBits > diagnosticReport.length - countOfBits ? 1 : 0));
 
 const gamma = (diagnosticReport: number[][]) => parseInt(mostCommonBits(diagnosticReport).join(''), 2);
 
 const leastCommonBits = (diagnosticReport: number[][]) =>
   countOfBits(diagnosticReport).map((countOfBits) => (countOfBits < diagnosticReport.length - countOfBits ? 1 : 0));
 
 const epsilon = (diagnosticReport: number[][]) => parseInt(leastCommonBits(diagnosticReport).join(''), 2);
 
 export const powerConsumption = (diagnosticReport: number[][]) => gamma(diagnosticReport) * epsilon(diagnosticReport);
 
 enum CommonValue {
   MostCommonValue,
   LeastCommonValue,
 }
 
 const commonBit = (commonValue: CommonValue, diagnosticReport: number[][], index: number) => {
   if (commonValue === CommonValue.MostCommonValue) {
     return countOfBits(diagnosticReport).map((countOfBit) =>
       countOfBit >= diagnosticReport.length - countOfBit ? 1 : 0,
     )[index];
   } else if (commonValue === CommonValue.LeastCommonValue) {
     return countOfBits(diagnosticReport).map((countOfBit) =>
       countOfBit < diagnosticReport.length - countOfBit ? 1 : 0,
     )[index];
   }
 };
 
 const getLastOccurrences = (commonValue: CommonValue, diagnosticReport: number[][]) =>
   binaryZero(diagnosticReport[0].length).reduce((acc, curr, index) => {
     if (acc.length > 1) {
       return acc.filter((line) => line[index] === commonBit(commonValue, acc, index));
     } else {
       return acc;
     }
   }, diagnosticReport);
 
 const getDiagDataInDecimal = (commonValue: CommonValue, diagnosticReport: number[][]) =>
   parseInt(getLastOccurrences(commonValue, diagnosticReport)[0].join(''), 2);
 
 export const oxygenGeneratorRating = (diagnosticReport: number[][]) =>
   getDiagDataInDecimal(CommonValue.MostCommonValue, diagnosticReport);
 
 export const co2ScrubberRating = (diagnosticReport: number[][]) =>
   getDiagDataInDecimal(CommonValue.LeastCommonValue, diagnosticReport);
 
 export const lifeSupportRating = (diagnosticReport: number[][]) =>
   oxygenGeneratorRating(diagnosticReport) * co2ScrubberRating(diagnosticReport);

/**
 * Day 4
 */

/**
 * Transpose a number matrix
 * 
 * @param m 
 * @returns 
 */
export const transpose = (m: number[][]) =>
   m[0].map((x,i) => m.map(x => x[i]));

export const rowOfMatrix = (m: number[][], index: number) =>
   m[index];

export const columnOfMatrix = (m: number[][], index: number) =>
   transpose(m)[index];

export const isTableWinner = (m: number[][], numbers: number[]) =>
   m.map((row) => row.every(cell => numbers.includes(cell))).includes(true) ||
   transpose(m).map((row) => row.every(cell => numbers.includes(cell))).includes(true);

export const sumOfUnmarkedNumber = (m: number[][], numbers: number[]) =>   
   m.flatMap( (row) => row)
    .filter( (cell) => !numbers.includes(cell))
    .reduce((acc, item) => acc + item, 0) * numbers.slice(-1)[0];

export const isBingoNummerWinner =  (bingoData: Bingo, displayedNumberIndex: number) => 
  bingoData.tables.some((table) => isTableWinner(table, bingoData.numbers.slice(0,displayedNumberIndex + 1)));

export const findFirstWinnerNumber = (bingoData: Bingo) =>
  bingoData.numbers.findIndex((number, index) => isBingoNummerWinner(bingoData, index));

export const findFirstWinnerTable = (bingoData: Bingo, displayedNumberIndex: number) =>
  bingoData.tables.findIndex((table) => isTableWinner(table, bingoData.numbers.slice(0,displayedNumberIndex + 1)));

export const getFinalScore = (bingoData: Bingo, displayedNumberIndex: number, winnerTableIndex: number) => 
  sumOfUnmarkedNumber(bingoData.tables[winnerTableIndex], bingoData.numbers.slice(0, displayedNumberIndex + 1));  

export const firstWinnerScore =  (bingoData: Bingo) => {
  const firstWinnerNumberIndex = findFirstWinnerNumber(bingoData);
  const firstWinnerTableIndex = findFirstWinnerTable(bingoData, firstWinnerNumberIndex);
  return getFinalScore(bingoData, firstWinnerNumberIndex, firstWinnerTableIndex);
} 
