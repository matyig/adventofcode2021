import Table from 'cli-table';
import { getInputData } from './data';
import { getNumArrayFromInputData, numOfLargerMeasurements, numOfLargerMeasurementsAdvanced } from './day1';
import { finalDepth, finalDepthAdvanced, getCommandArrayFromInputData } from './day2';
import { powerConsumption, lifeSupportRating, getBinaryArrayFromInputData } from './day3';
import { firstWinnerScore, getBingoDataFromInputData, lastWinnerScore } from './day4';

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

const bingoData = getBingoDataFromInputData(getInputData('./input/day4.txt'));
summary.push([4, firstWinnerScore(bingoData), lastWinnerScore(bingoData)]);

/**
 * Summary
 */
console.log(summary.toString());

