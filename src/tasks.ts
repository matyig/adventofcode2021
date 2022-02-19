import { Command } from './types';

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


/**
 * Day 2
 */

 const addDay2Commands = (data: Command[], operator: string) =>
 data
   .filter((command) => command.operator === operator)
   .map((command) => command.value)
   .reduce((a, b) => a + b, 0);

const horizontal = (commands: Command[]) => addDay2Commands(commands, 'forward');

const down = (commands: Command[]) => addDay2Commands(commands, 'down');

const up = (commands: Command[]) => addDay2Commands(commands, 'up');

export const finalDepth = (commands: Command[]) => horizontal(commands) * (down(commands) - up(commands));

const depth = (commands: Command[]) =>
 commands.reduce(
   (acc, command) => {
     if (command.operator.startsWith('down')) {
       acc.angle = acc.angle + command.value;
     } else if (command.operator.startsWith('up')) {
       acc.angle = acc.angle - command.value;
     } else if (command.operator.startsWith('forward')) {
       acc.depth = acc.depth + acc.angle * command.value;
     }
     return acc;
   },
   { depth: 0, angle: 0 },
 );

export const finalDepthAdvanced = (commands: Command[]) => horizontal(commands) * depth(commands).depth;