export type SevenSegmentEntry = {
    patterns: string[]
    output: string[]
}

export const getSevenSegmentsFromInput = (inputData: string[]): SevenSegmentEntry[] =>
    inputData.filter( line => line.includes('|')).map( line => {
        const parts = line.split('|').map( part => part.trim())
        const patterns = parts[0].split(' ')
        const output = parts[1].split(' ')
        return { patterns: patterns, output: output} as SevenSegmentEntry
    })

export const getSumOfDigits1478 = (entries: SevenSegmentEntry[]): number =>
    entries.flatMap( entry => entry.output.filter(digit => [2,3,4,7].includes(digit.length))).length

export const getDigitPatternMapping = (entry: SevenSegmentEntry): Map<string| undefined, number> => {
    const sortedPatterns = entry.patterns.map( pattern => pattern.split("").sort().join(""))

    const value1 = sortedPatterns.find( value => value.length == 2)
    const value4 = sortedPatterns.find( value => value.length == 4)
    const value7 = sortedPatterns.find( value => value.length == 3)
    const value8 = sortedPatterns.find( value => value.length == 7)

    const segment6 = sortedPatterns.filter(value => value.length == 6)
    const value9 = segment6.find( value => isPatternIncludes(value,value4))
    const value0 = segment6.filter( value => value !== value9).find( value => isPatternIncludes(value,value1))
    const value6 = segment6.find( value => value !== value9 && value !== value0)

    const segment5 = sortedPatterns.filter(value => value.length == 5)
    const value3 = segment5.find( value => isPatternIncludes(value,value1))
    const value5 = segment5.find( value => isPatternIncludes(value6,value))
    const value2 = segment5.find( value => value !== value3 && value !== value5)

    const mapping = new Map<string | undefined,number>()
    mapping.set(value0,0)
    mapping.set(value1,1)
    mapping.set(value2,2)
    mapping.set(value3,3)
    mapping.set(value4,4)
    mapping.set(value5,5)
    mapping.set(value6,6)
    mapping.set(value7,7)
    mapping.set(value8,8)
    mapping.set(value9,9)
    return mapping
}
  
export const isPatternIncludes = (pattern: string | undefined, value: string | undefined) =>
    value !== undefined && pattern !== undefined ? value.split("").map(v => pattern.includes(v)).every( v => v === true) : false

export const decodeEntry = (output: string[], mapping: Map<string | undefined, number>) =>
    parseInt(output.map( o => o.split("").sort().join("")).map( o=> mapping.get(o)).join(""))

export const getSumOfOutputValues = (entries: SevenSegmentEntry[]): number =>
    entries.map( entry => decodeEntry(entry.output,getDigitPatternMapping(entry))).reduce((sum, value) => sum + value)
