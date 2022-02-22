/**
 * Day 4
 */
export type Bingo = {
  numbers: number[];
  tables: number[][][];
}

export const getBingoDataFromInputData = (inputData: string[]) => {
  const numbers = inputData[0]
    .split(',')
    .map((bingoNumber) => parseInt(bingoNumber))
    .filter((bingoNumber) => !isNaN(bingoNumber));
  const tables = [] as number[][][];
  inputData.slice(1, inputData.length).reduce((acc, line) => {
    const row = line
      .split(' ')
      .map((number) => parseInt(number))
      .filter((number) => !isNaN(number));
    if (row.length === 5) {
      acc.push(row);
      if (acc.length === 5) {
        tables.push(acc);
        acc = [];
      }
    }
    return acc;
  }, [] as number[][]);
  return { numbers: numbers, tables: tables } as Bingo;
};

export const transpose = (m: number[][]) => m[0].map((x, i) => m.map((x) => x[i]));

export const rowOfMatrix = (m: number[][], index: number) => m[index];

export const columnOfMatrix = (m: number[][], index: number) => transpose(m)[index];

export const isTableWinner = (m: number[][], numbers: number[]) =>
  m.map((row) => row.every((cell) => numbers.includes(cell))).includes(true) ||
    transpose(m).map((row) => row.every((cell) => numbers.includes(cell)))
    .includes(true);

export const sumOfUnmarkedNumber = (m: number[][], numbers: number[]) =>
  m.flatMap((row) => row)
    .filter((cell) => !numbers.includes(cell))
    .reduce((acc, item) => acc + item, 0) * numbers.slice(-1)[0];

export const isBingoNummerWinner = (bingoData: Bingo, displayedNumberIndex: number) =>
  bingoData.tables.some((table) => isTableWinner(table, bingoData.numbers.slice(0, displayedNumberIndex + 1)));

export const findFirstWinnerNumber = (bingoData: Bingo) =>
  bingoData.numbers.findIndex((number, index) => isBingoNummerWinner(bingoData, index));

export const findLastWinnerNumber = (bingoData: Bingo) =>
  bingoData.numbers.findIndex((number, index) =>
    bingoData.tables.every((table) => isTableWinner(table, bingoData.numbers.slice(0, index + 1))),
  );

export const findFirstWinnerTable = (bingoData: Bingo) => {
  const displayedNumberIndex = findFirstWinnerNumber(bingoData);
  return bingoData.tables.findIndex((table) =>
    isTableWinner(table, bingoData.numbers.slice(0, displayedNumberIndex + 1)),
  );
};

export const findLastWinnerTable = (bingoData: Bingo) => {
  const displayedNumberIndex = findLastWinnerNumber(bingoData);
  return bingoData.tables
    .reverse()
    .findIndex((table) => !isTableWinner(table, bingoData.numbers.slice(0, displayedNumberIndex)));
};

export const getFinalScore = (bingoData: Bingo, displayedNumberIndex: number, winnerTableIndex: number) =>
  sumOfUnmarkedNumber(bingoData.tables[winnerTableIndex], bingoData.numbers.slice(0, displayedNumberIndex + 1));

export const firstWinnerScore = (bingoData: Bingo) => {
  const firstWinnerNumberIndex = findFirstWinnerNumber(bingoData);
  const firstWinnerTableIndex = findFirstWinnerTable(bingoData);
  return getFinalScore(bingoData, firstWinnerNumberIndex, firstWinnerTableIndex);
};

export const lastWinnerScore = (bingoData: Bingo) => {
  const lastWinnerNumberIndex = findLastWinnerNumber(bingoData);
  const lastWinnerTableIndex = findLastWinnerTable(bingoData);
  return getFinalScore(bingoData, lastWinnerNumberIndex, lastWinnerTableIndex);
};
