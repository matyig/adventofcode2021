import { getBasin, getHeightMapFromInput, getLargestBasin, getRiskLevelOfLowPoints } from "./day9"

describe('Test for Day 8', () => {

    const input = [
        '2199943210',
        '3987894921',
        '9856789892',
        '8767896789',
        '9899965678'
    ]

    it('test', () => {
        const expected = 15
        const heightmap = getHeightMapFromInput(input)
        const numOfLowPoints = getRiskLevelOfLowPoints(heightmap)
        expect(numOfLowPoints).toBe(expected)
    })

    it('basin test', () => {
        const expected = 1134
        const heightmap = getHeightMapFromInput(input)
        const numOfLowPoints = getLargestBasin(heightmap)
        expect(numOfLowPoints).toBe(expected)
    })

})