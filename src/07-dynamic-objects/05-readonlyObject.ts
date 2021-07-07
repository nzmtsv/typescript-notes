// можем выносить значения типов в отдельные типы(работаем как с функциями)
type Properties<T> = keyof T
type Values<T> = T[Properties<T>]

type ReadonlyObject<T> = {
    readonly [P in Properties<T>]: T[P]
}

type RemoveReadonly<T> = {
    - readonly [P in Properties<T>]: T[P]
}
