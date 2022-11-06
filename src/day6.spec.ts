import { getAdvancedAgesFromAge, getAgesFromInput, getNumOfFishAfterNumOfDays, getNumOfFishAfterNumOfDaysAdvanced } from "./day6"

describe('Tests for Day 6', () => {

    const input = '3,4,3,1,2'

   it('test', () => {
        const expected = 5934
        const ages = getAgesFromInput(input)
        const numOfFish = getNumOfFishAfterNumOfDays(ages, 80)
        expect(numOfFish).toBe(expected)
    });

    it('advanced test', () => {
        const expected = 26984457539n
        const ages = getAgesFromInput(input)
        const advancedAges = getAdvancedAgesFromAge(ages)
        const numOfFish = getNumOfFishAfterNumOfDaysAdvanced(advancedAges, 256)
        expect(numOfFish).toBe(expected)
    });

});
