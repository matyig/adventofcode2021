import fs from 'fs';

import { Command } from './types';
import { validCommands, binaryNumbers } from './constants';

/**
 * Coverts the input file to a string array
 * 
 * @param filename 
 * @returns 
 */
export const getInputData = (filename: string) => {
  try {
    return fs.readFileSync(filename, 'utf8').split('\n');
  } catch (err) {
    console.error(err);
    throw new Error('{e}');
  }
};

/**
 * Day 1
 */

/**
 * Converts the day 1 input to a num array
 * 
 * @param inputData
 * @returns 
 */
export const getNumArrayFromInputData = (inputData: string[]) =>
  inputData.map((line) => parseInt(line)).filter((measurement) => !isNaN(measurement));


/**
 * Day 2
 */

/**
 * Converts the day 2 input to a command array
 * 
 * @param inputData 
 * @returns 
 */
 export const getCommandArrayFromInputData = (inputData: string[]) =>
 inputData
   .map((line) => {
     const command = line.split(' ');
     return { operator: command[0], value: parseInt(command[1]) } as Command;
   })
   .filter((command) => validCommands.includes(command.operator) && !isNaN(command.value));  


/**
 * Day 3
 */

/**
 * Converts the day 3 input to a two dimensional num array
 * 
 * @param inputData 
 * @param binNumberWidth 
 * @returns 
 */
 export const getBinaryArrayFromInputData = (inputData: string[], binNumberWidth: number) =>
 inputData
   .map((line) => Array.from(line).map((digit) => parseInt(digit)))
   .filter((line) => {
     const isBinary = line.reduce((acc, digit) => acc && binaryNumbers.includes(digit), true);
     return isBinary && line.length === binNumberWidth;
   });   