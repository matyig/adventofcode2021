import Table from 'cli-table';

import { getNumArrayFromInputData, getCommandArrayFromInputData, getInputData, getBinaryArrayFromInputData } from './data';

import {
  numOfLargerMeasurements,
  numOfLargerMeasurementsAdvanced,
  finalDepth,
  finalDepthAdvanced,
  powerConsumption,
  lifeSupportRating,    
} from './tasks';

const summary = new Table({
  head: ['Day', 'Part 1', 'Part 2'],
  colWidths: [10, 20, 20],
});

const dataDay1 = getNumArrayFromInputData(getInputData('./input/day1.txt'));
summary.push([1, numOfLargerMeasurements(dataDay1), numOfLargerMeasurementsAdvanced(dataDay1)]);

const dataDay2 = getCommandArrayFromInputData(getInputData('./input/day2.txt'));
summary.push([2, finalDepth(dataDay2), finalDepthAdvanced(dataDay2)]);

const dataDay3 = getBinaryArrayFromInputData(getInputData('./input/day3.txt'), 12);
summary.push([3, powerConsumption(dataDay3), lifeSupportRating(dataDay3)]);

/**
 * Summary
 */
console.log(summary.toString());

