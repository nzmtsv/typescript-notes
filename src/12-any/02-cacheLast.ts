// Как полумера , скрывайте небезопасные утверждения типов
// в грамотно типизированных функциях

function useMemo<T extends Function>(fn: T) : T {
    let lastArgs: any[] | null = null
    let lastResult: any
    return function(...args: any[]) {
        if (!lastArgs || !shallowEqual(lastArgs, args)) {
            lastResult = fn(...args)
            lastArgs = args
        }
        return lastResult;
    } as unknown as T
}

function shallowEqual<T extends object>(a: T, b: T): boolean {
    for (const [key, val] of Object.entries(a)) {
        if(!(key in b) || val !== (b as any)[key]) {
            return false
        }
    }
    return Object.keys(a).length === Object.keys(b).length
}


