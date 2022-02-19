import Table from 'cli-table';

import { getNumArrayFromInputData, getCommandArrayFromInputData, getInputData } from './data';

import {
  numOfLargerMeasurements,
  numOfLargerMeasurementsAdvanced,
  finalDepth,
  finalDepthAdvanced,  
} from './tasks';

const summary = new Table({
  head: ['Day', 'Part 1', 'Part 2'],
  colWidths: [10, 20, 20],
});

const dataDay1 = getNumArrayFromInputData(getInputData('./input/day1.txt'));
summary.push([1, numOfLargerMeasurements(dataDay1), numOfLargerMeasurementsAdvanced(dataDay1)]);

const dataDay2 = getCommandArrayFromInputData(getInputData('./input/day2.txt'));
summary.push([2, finalDepth(dataDay2), finalDepthAdvanced(dataDay2)]);

/**
 * Summary
 */
console.log(summary.toString());

