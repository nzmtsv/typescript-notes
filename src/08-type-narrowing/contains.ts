// Старайтесь сужать типы

// Сузить отбросом
const element = document.getElementById('foo')
if (!element) throw new Error('Unable to find #foo')
element.innerHTML = 'Foo'.blink();

const el = document.getElementById('foo')
if (typeof el === 'object') {
    el
}

function bar(x?: number | string | null) {
    if (!x) {
       x
    }
}

// Через instanceof
function contains(text: string, search: string | RegExp) {
    if (search instanceof RegExp) {
       return search.exec(text)
    }
    search
    return text.includes(search)
}

// через проверку свойств
interface A { a: number }
interface B { b: number }
function pickAB(ab: A | B) {
    if ('a' in ab) {
        ab
    } else {
        ab
    }
    ab
}

// через встроенные функции вроде Array.isArray
function containsWithIsArray(terms: string | string[]) {
    const termList = Array.isArray(terms) ? terms : [terms]
    termList
}

// через размеченное объединение
interface UploadEvent {
    type: 'upload'
    filename: string
    contents: string
}

interface DownloadEvent {
    type: 'download'
    filename: string
}

type AppEvent = UploadEvent | DownloadEvent

function handleEvent(e: AppEvent) {
    switch (e.type) {
        case 'download':
            e
            break;
        case 'upload':
            e
            break
    }
}

// Пользовательской защитой типа
function isInputElement(el: HTMLElement): el is HTMLInputElement {
    return 'value' in el
}

function getElementContent(el: HTMLElement) {
    if (isInputElement(el)) {
       return el.value
    }
    return el.textContent
}

// Общая защита типа
const group = ['Boris', 'Ivan', 'Vasiliy']

const classMates = ['Ivan', 'Michael']
    .map((who) => group.find(n => n === who))
    .filter(who => who !== undefined) //  не срабатывает

function isDefined<T>(x: T | undefined): x is T {
    return x !== undefined
}

const classMate = ['Ivan', 'Michael']
    .map((who) => group.find(n => n === who))
    .filter(isDefined)
