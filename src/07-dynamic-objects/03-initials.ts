// типы через условие
declare let hasMiddleName: boolean
const firstLast = { first: '', last: '' }
const initials = {...firstLast, ...(hasMiddleName ? { middleName: '' }: {} )}

// что если хотим вынести такое действие в функцию
function addOptional<T extends object, U extends object>(
    a: T, b: U | null
): T & Partial<U> {
    return {...a, ...b}
}

const strangePerson = addOptional(
    firstLast,  hasMiddleName ? { middleName: 'Strange'} : null
)
