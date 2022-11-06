export const getAgesFromInput = (input: string): number[] =>
    input.split(',')
    .map( age => parseInt(age))

export const getNextDayAges = (ages: number[]): number[] =>
    ages.flatMap( age => age > 0 ? age-1 : [6,8])

export const getNumOfFishAfterNumOfDays = (ages: number[], days: number): number => {
    if (days > 0) {
        --days
        return getNumOfFishAfterNumOfDays(getNextDayAges(ages), days)
    }
    return ages.length
}

export const getAdvancedAgesFromAge = (ages: number[]): bigint[] => {
    const advancedAges = [0n,0n,0n,0n,0n,0n,0n,0n,0n]
    ages.forEach( age => {
        ++advancedAges[age]
    })
    return advancedAges
}

export const getNextDayAgesAdvanced = (advancedAges: bigint[]) : bigint[] =>
    [advancedAges[1], advancedAges[2], advancedAges[3], advancedAges[4], advancedAges[5],advancedAges[6], advancedAges[0] + advancedAges[7], advancedAges[8], advancedAges[0]]

export const getNumOfFishAfterNumOfDaysAdvanced = (ages: bigint[], days: number): bigint => {
    if (days > 0) {
        --days
        return getNumOfFishAfterNumOfDaysAdvanced(getNextDayAgesAdvanced(ages), days)
    }
    return ages.reduce( (sum, age) => sum+ age)
}