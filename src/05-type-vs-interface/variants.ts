// Используйте тот или иной стиль с оглядкой на проект
type AorB = 'a' | 'b'
type BorC =  'b' | 'c' // union type

interface Variants {
    [name: string]: AorB | BorC
}

type namedVariants = (AorB | BorC) & { name: string } // intersection type

// type более ясно выражает функции кортежи и массивы
type TFn = (x: number) => string

interface IFn {
    (x: number): string
}

type TTuple = [number, number]

type StringArray = string[]

type NamedNums = [string, ... number[]]

interface ITuple {
    0: number
    1: number
    length: 2
}

const tuple: TTuple = [10, 20]

// может быть дополнен, при этом, если свойство повторяется, оно будет never
interface ITuple {
    2?: number
}

const tupleInterface: ITuple = [20, 30]

// Абстрактный класс в отличие от интерфейса может иметь реализованные методы,
// присвоенные поля
