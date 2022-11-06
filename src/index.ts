import Table from 'cli-table';
import { getInputData } from './data';
import { getNumArrayFromInputData, numOfLargerMeasurements, numOfLargerMeasurementsAdvanced } from './day1';
import { finalDepth, finalDepthAdvanced, getCommandArrayFromInputData } from './day2';
import { powerConsumption, lifeSupportRating, getBinaryArrayFromInputData } from './day3';
import { firstWinnerScore, getBingoDataFromInputData, lastWinnerScore } from './day4';
import { getNumOfOverlap, getNumOfOverlapAdvanced, getVentsFromInputData} from "./day5";
import { getAdvancedAgesFromAge, getAgesFromInput, getNumOfFishAfterNumOfDays, getNumOfFishAfterNumOfDaysAdvanced } from './day6';
import { getCrabsPositionFromInput, getLeastFuelHorizontalPosition, getLeastFuelHorizontalPositionAdvanced } from './day7';

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

const vents = getVentsFromInputData(getInputData('./input/day5.txt'))
summary.push([5, getNumOfOverlap(vents), getNumOfOverlapAdvanced(vents)]);

const ages = getAgesFromInput(getInputData('./input/day6.txt')[0])
const advancedAges = getAdvancedAgesFromAge(ages)
summary.push([6, getNumOfFishAfterNumOfDays(ages, 80), getNumOfFishAfterNumOfDaysAdvanced(advancedAges, 256)]);

const crabs = getCrabsPositionFromInput(getInputData('./input/day7.txt')[0])
summary.push([7, getLeastFuelHorizontalPosition(crabs), getLeastFuelHorizontalPositionAdvanced(crabs)])

/**
 * Summary
 */
console.log(summary.toString());

