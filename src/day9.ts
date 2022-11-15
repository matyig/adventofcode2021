export const getHeightMapFromInput = (inputData: string[]) : number[][] =>
    inputData.filter( line => line.length > 0).map( line => line.split("").map(number => parseInt(number)))

export const isLowPoint = (heightmap: number[][], rowindex: number, colindex: number) : boolean => {
    const left = colindex > 0 ? heightmap[rowindex][colindex-1] > heightmap[rowindex][colindex] : true
    const right = colindex < heightmap[0].length-1 ? heightmap[rowindex][colindex+1] > heightmap[rowindex][colindex] : true
    const up = rowindex  > 0 ? heightmap[rowindex-1][colindex] > heightmap[rowindex][colindex] : true
    const down = rowindex < heightmap.length -1 ? heightmap[rowindex+1][colindex] > heightmap[rowindex][colindex] : true
    return up && down && left && right
}  

export const getRiskLevelOfLowPoints = (heightmap: number[][]) : number =>
    heightmap.map( (row,rowindex) => row.map( (point, colindex) =>
        isLowPoint(heightmap, rowindex, colindex) ? heightmap[rowindex][colindex] : -1
    )).flat().filter( point => point > -1).map( point => point + 1).reduce( (sum, point) => sum + point)


export type BasinPoint = {
    x: number,
    y: number,
    height: number
}

export const getBasin = (heightmap: number[][], rowindex: number, colindex: number,  visited: boolean[][], basin: BasinPoint[]): BasinPoint[] => {
    if (visited[rowindex][colindex])
        return basin
    else
        visited[rowindex][colindex] = true    

    const height = heightmap[rowindex][colindex]
    if (height == 9)
         return basin
    else {
        const left = colindex > 0 ? getBasin(heightmap, rowindex, colindex-1, visited, basin) : basin
        const right = colindex < heightmap[0].length-1 ? getBasin(heightmap, rowindex, colindex+1, visited, basin) : basin
        const up = rowindex > 0 ? getBasin(heightmap, rowindex-1, colindex, visited, basin) : basin
        const down = rowindex < heightmap.length -1 ? getBasin(heightmap, rowindex+1, colindex, visited, basin) : basin
        
        const basinPoint = { x: colindex, y: rowindex, height: height} as BasinPoint
        if (!basin.includes(basinPoint)) {
            basin.push(basinPoint)
        }
        return basin        
    }
}

export const getLargestBasin = (heightmap: number[][])  => {
    const visited : boolean[][] = new Array(heightmap.length).fill(false).map(() => new Array(heightmap[0].length).fill(false));
    return heightmap.flatMap((row, rowindex) => row.map( (point, colindex) => { return { x: colindex, y: rowindex, height: point} as BasinPoint }))
                        .filter( p => isLowPoint(heightmap, p.y, p.x))
                        .map( p => getBasin(heightmap, p.y, p.x, visited, []).length)
                        .sort((a, b) => b - a)
                        .slice(0,3)
                        .reduce((fact, p) => fact * p )                       
}
