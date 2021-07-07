// Используйте более точные варианты any

function getLengthBad(array: any) {
    return array.length
}

function getLength(array: any[]) {
    return array.length
}

function hasTwelveLetterKey(o: { [key: string]: any }) {
    for (const key in o) {
        if (key.length === 12) {
            return true
        }
    }
    return false
}
// избегайте any, когда ожидаете функциональный тип
type fn0 = () => any // без параметров
type fn1 = (arg: any) => any // с одним параметром
type FnN = (...args: any[]) => any // c любым числом параметров
