import { finalDepth, finalDepthAdvanced, getCommandArrayFromInputData } from './day2';

describe('Tests for Day 2', () => {
  const input = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2'];
  const commands = getCommandArrayFromInputData(input);

  it('Given 6 commands, depth should be 150', () => {
    const expected = 150;
    const result = finalDepth(commands);
    expect(result).toBe(expected);
  });

  it('Given 6 commands, depth should be 900', () => {
    const expected = 900;
    const result = finalDepthAdvanced(commands);
    expect(result).toBe(expected);
  });
});
