// Используйте сигнатуры индексов для динамических данных

// Известно что Row может иметь ключи A, B, C, D, но не известно сколько их будет
interface Row1 { [column: string]: number } // слишком широко

interface Row2 { // лучше
    a: number
    b?: number
    c?: number
    d?: number
}

type Row3 =
    | { a: number}
    | { a: number, b: number}
    | { a: number, b: number, c: number}
    | { a: number, b: number, c: number, d: number}


type RowPart = { [k in 'a' | 'b' | 'c' | 'd']: number }

// { a: number, b: number, c: number, d: number}
type RowPartRecord = Record<'a' | 'b' | 'c' | 'd', number>

interface Row2 {
    e: string
}

type RowWithString = {
    [k in 'a' | 'b' | 'c' | 'd' | 'e']: k extends 'e' ? string : number
}
