// Используйте типобезопасные подходы при обезьяньем патче

(document as any).monkey = 'Foo'

interface Document {
    // становятся доступны комментарии, автоподстановка, проверка на опечатки
    monkey: string
}

document.monkey = 'Bar'


interface MonkeyDocument extends Document {
    monkey: string
}

(document as MonkeyDocument).monkey = 'Foo'

interface Array<T> {
    zip<U>(list: U[]): [T, U][]
}



