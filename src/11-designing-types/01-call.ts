// пример ограниченного полиморфизма и моделирования типов
// упрощенный call , без внимания к this

function call(
    f: (...args: unknown[]) => unknown,
    ...args: unknown[]
): unknown {
    return f(...args)
}

function callPoly<T extends unknown[], R>(
    f: (...args: T) => R,
    ...args: T
): R {
    return f(...args)
}

console.log(Array.from('foo'))
// expected output: Array ["f", "o", "o"]

function fill(length: number, value: string): string[] {
    return Array.from({ length }, () => value)
}

callPoly(fill, 10, 'a') // [ "a", "a", "a", "a", "a", "a", "a", "a", "a", "a" ]
