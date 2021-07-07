// Используйте unknown вместо any для значений с неизвестным типом

function parseYamlBad (yaml: string): any {
    // ...
    return yaml
}


const book = parseYamlBad(`
    name: Foo
    author: Bar     
`)

console.log(book.title) // undefined

function safeParseYaml(yaml: string): unknown {
    // ...
    return yaml
}

interface Book {
    name: string
    author: string
}

const safeBook = safeParseYaml(`
    name: foo
    author: bar
`) as Book

// Утверждение типа - это не единственный способ восстановить тип из объекта

function isBook(val: unknown): val is Book { // type predicate
    return (
        typeof(val) === 'object' && val !== null &&
        'name' in val && 'author' in val
    )
}

function processValue(val: unknown) {
    if (isBook(val)) {
        val;
    }
}

function safeParseYamlGeneric<T>(yaml: string): T {
    return parseYamlBad(yaml)
}
