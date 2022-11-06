import { getAdvancedFuelCost, getAdvancedFuelCosts, getCrabsPositionFromInput, getFuelCosts, getLeastFuelHorizontalPosition } from "./day7";

describe('Tests for Day 7', () => {

    const input = '16,1,2,0,4,2,7,1,2,14'

    it('test fuel costs', () =>{
        const expected = 37
        const pos = 2
        const crabsPos = getCrabsPositionFromInput(input)
        const fuelCost = getFuelCosts(crabsPos, pos)
        expect(fuelCost).toBe(expected)
    })

    it('test advanced fuel cost odd', () => {
        const expected = 10
        const from = 1
        const to = 5
        const fuelCost = getAdvancedFuelCost(from, to)
        expect(fuelCost).toBe(expected)
    })

    it('test advanced fuel cost even', () => {
        const expected = 15
        const from = 0
        const to = 5
        const fuelCost = getAdvancedFuelCost(from, to)
        expect(fuelCost).toBe(expected)
    })

    it('test fuel costs advanced', () => {
        const expected = 168
        const pos = 5
        const crabsPos = getCrabsPositionFromInput(input)
        const fuelCost = getAdvancedFuelCosts(crabsPos, pos)
        expect(fuelCost).toBe(expected)
    })

    it('test least fuel horizontal pos', () =>{
        const expected = 2
        const crabsPos = getCrabsPositionFromInput(input)
        const optHorizontalPos = getLeastFuelHorizontalPosition(crabsPos)
        expect(optHorizontalPos).toBe(expected)
    })

});