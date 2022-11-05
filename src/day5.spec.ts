import {getNumOfOverlap, getNumOfOverlapAdvanced, getVentMatrix, getVentsFromInputData} from "./day5";

describe('Tests for Day 5', () => {
    const input = [
        '0,9 -> 5,9',
        '8,0 -> 0,8',
        '9,4 -> 3,4',
        '2,2 -> 2,1',
        '7,0 -> 7,4',
        '6,4 -> 2,0',
        '0,9 -> 2,9',
        '3,4 -> 1,4',
        '0,0 -> 8,8',
        '5,5 -> 8,2'
    ];

    it('calculate overlap test', () => {
        const expected = 5
        const vents = getVentsFromInputData(input)
        const overlaps = getNumOfOverlap(vents)
        expect(overlaps).toBe(expected);
    })

    it('calculate overlap test advanced', () => {
        const expected = 12
        const vents = getVentsFromInputData(input)
        const overlaps = getNumOfOverlapAdvanced(vents)
        expect(overlaps).toBe(expected);
    })

});
