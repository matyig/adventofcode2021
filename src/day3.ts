/**
 * Day 3
 */

 export const binaryNumbers = [0, 1];
 
 export const getBinaryArrayFromInputData = (inputData: string[], binNumberWidth: number) =>
 inputData
   .map((line) => Array.from(line).map((digit) => parseInt(digit)).filter((digit) => !isNaN(digit)))
   .filter((line) => {
     const isBinary = line.reduce((acc, digit) => acc && binaryNumbers.includes(digit), true);
     return isBinary && line.length === binNumberWidth;
   });

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
