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

