export const getCrabsPositionFromInput = (input: string): number[] =>
    input.split(',')
    .map( crabPos => parseInt(crabPos))

export const getFuelCosts = (crabsPos: number[], pos: number): number =>
    crabsPos.map( crabPos => (Math.abs(crabPos - pos))).reduce( (sum, fuel) => sum + fuel)

export const getPosArray = (crabsPos: number[]): number[] => {
    const minPos = Math.min(...crabsPos)
    const maxPos = Math.max(...crabsPos)
    return Array.from({length: maxPos-minPos+1}, (_, i) => i + minPos);
}

export const getLeastFuelHorizontalPosition = (crabsPos: number[]): number => {
    const posArray = getPosArray(crabsPos)
    const fuelArray = posArray.map( pos => getFuelCosts(crabsPos,pos))
    return Math.min(...fuelArray)
}

export const getAdvancedFuelCosts = (crabsPos: number[], pos: number): number => {
    return crabsPos.map( crabPos => (getAdvancedFuelCost(crabPos, pos))).reduce( (sum, fuel) => sum + fuel)
}

export const getAdvancedFuelCost = (from: number, to: number) : number => {
    const move = Math.abs(from-to)
    if (move % 2 == 0) {
        return (move + 1) * (move / 2)
    } else {
        return (move + 1) * ((move - 1) / 2) + ( move + 1 ) / 2
    }
}

export const getLeastFuelHorizontalPositionAdvanced = (crabsPos: number[]): number => {
    const posArray = getPosArray(crabsPos)
    const fuelArray = posArray.map( pos => getAdvancedFuelCosts(crabsPos,pos))
    return Math.min(...fuelArray)
}

