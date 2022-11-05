import {webcrypto} from "crypto";

export type Vent = {
    x0: number,
    y0: number,
    x1: number,
    y1: number
}

export const createVent = (x0: number, y0: number, x1: number, y1: number): Vent => {
    return {x0: x0, y0: y0, x1: x1, y1: y1} as Vent;
}

export const getVentsFromInputData = (inputData: string[]): Vent[] => {
    const vents = inputData
        .filter( line => line.includes('->'))
        .map( line => line.split('->')
        .flatMap(vent => vent.trim().split(',')))
    return vents.map( vent => createVent(parseInt(vent[0]), parseInt(vent[1]), parseInt(vent[2]), parseInt(vent[3])))
}

export const isVentHorizontal = (vent: Vent) : boolean =>
    vent.x0 == vent.x1

export const isVentVertical = (vent: Vent) : boolean =>
    vent.y0 == vent.y1

export const isVentDiagonal = (vent: Vent) : boolean =>
    vent.x0-vent.x1 == vent.y0 - vent.y1

export const isVentInvDiagonal = (vent: Vent) : boolean =>
    vent.x0-vent.x1 == vent.y1 - vent.y0

export const getEmptyVentMatrix = (vents: Vent[]): number[][] => {
    const rows = vents.map( v => v.y0 > v.y1 ? v.y0: v.y1).reduce((prev, current) => (prev > current) ? prev : current)
    const cols = vents.map( v => v.x0 > v.x1 ? v.x0: v.x1).reduce((prev, current) => (prev > current) ? prev : current)
    return Array(rows + 1).fill(0).map(() => new Array(cols + 1).fill(0))
}

export const getVentMatrix = (vents: Vent[]): number[][] => {
    const matrix = getEmptyVentMatrix(vents)

    vents.forEach( vent => {
        if (isVentHorizontal(vent)) {
            const [from, to] = vent.y0 < vent.y1 ? [vent.y0,vent.y1] : [vent.y1,vent.y0]
            // const to = vent.y1
            for (let y=from; y <= to; y++) {
                ++matrix[vent.x0][y]
            }
        } else if (isVentVertical(vent)) {
            const [from, to] = vent.x0 < vent.x1 ? [vent.x0,vent.x1] : [vent.x1,vent.x0]
            for (let x = from; x <= to; x++) {
                ++matrix[x][vent.y0]
            }
        }
    })
    return matrix
}

export const getNumOfOverlap = (vents: Vent[]): number =>
    getVentMatrix(vents).flatMap( item => item.filter( it => it > 1)).length

export const getVentMatrixAdvanced = (vents: Vent[]) : number[][] => {
    const matrix = getVentMatrix(vents)

    vents.forEach( vent => {
        if (isVentDiagonal(vent)) {
            const [fromx, tox] = vent.x0 < vent.x1 ? [vent.x0,vent.x1] : [vent.x1,vent.x0]
            const [fromy, toy] = vent.y0 < vent.y1 ? [vent.y0,vent.y1] : [vent.y1,vent.y0]
            for (let x = fromx; x <= tox; x++)
                for (let y=fromy; y <= toy; y++)
                    if (x-fromx == y-fromy)
                        ++matrix[x][y]
        } else if (isVentInvDiagonal(vent)) {
            const [fromx, tox] = vent.x0 < vent.x1 ? [vent.x0,vent.x1] : [vent.x1,vent.x0]
            const [fromy, toy] = vent.y0 < vent.y1 ? [vent.y1,vent.y0] : [vent.y0,vent.y1]
            for (let x = fromx; x <= tox; x++)
                for (let y=fromy; y >= toy; y--)
                    if (x-fromx == fromy-y)
                        ++matrix[x][y]
        }
    })
    return matrix
}

export const getNumOfOverlapAdvanced = (vents: Vent[]): number =>
    getVentMatrixAdvanced(vents).flatMap( item => item.filter( it => it > 1)).length
