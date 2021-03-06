import fs from 'fs';

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
