// Лучше обобщенные типы, чем новые перегруженные декларации
function double(x: number): number
function double(x: string): string
function double(x: any) {
    return x + x
}

// function doubleWrapper(x: number | string) {
//     return double(x)
// }

function doubleGeneric<T extends number | string>(
    x : T
): T extends string ? string : number
function doubleGeneric(x: any) {
    return x + x
}
