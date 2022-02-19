import Table from 'cli-table';

import { getNumArrayFromInputData, getInputData } from './data';

import {
  numOfLargerMeasurements,
  numOfLargerMeasurementsAdvanced,
} from './tasks';

const summary = new Table({
  head: ['Day', 'Part 1', 'Part 2'],
  colWidths: [10, 20, 20],
});

const dataDay1 = getNumArrayFromInputData(getInputData('./input/day1.txt'));

summary.push([1, numOfLargerMeasurements(dataDay1), numOfLargerMeasurementsAdvanced(dataDay1)]);


/**
 * Summary
 */
console.log(summary.toString());

