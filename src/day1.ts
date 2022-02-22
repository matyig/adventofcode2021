/**
 * Day 1
 */

export const getNumArrayFromInputData = (inputData: string[]) =>
 inputData.map((line) => parseInt(line)).filter((measurement) => !isNaN(measurement));

export const numOfLargerMeasurements = (measurements: number[]) =>
  measurements.map((item, index, elements) => elements[index] < elements[index + 1]).filter((item) => item).length;

const sumNext3Items = (elements: number[], index: number) =>
  elements[index] + elements[index + 1] + elements[index + 2];

export const numOfLargerMeasurementsAdvanced = (measurements: number[]) =>
  measurements
    .map((item, index, elements) => sumNext3Items(elements, index) < sumNext3Items(elements, index + 1))
    .filter((item) => item).length;
