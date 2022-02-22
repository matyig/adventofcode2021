/**
 * Day 2
 */

 export type Command = {
  operator: string;
  value: number;
};

 export const validCommands = ['up', 'down', 'forward'];
 
 export const getCommandArrayFromInputData = (inputData: string[]) =>
 inputData
   .map((line) => {
     const command = line.split(' ');
     return { operator: command[0], value: parseInt(command[1]) } as Command;
   })
   .filter((command) => validCommands.includes(command.operator) && !isNaN(command.value));  

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
