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
