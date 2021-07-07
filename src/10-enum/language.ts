enum Language {
    English = 100+4,
    Russian
}

let eng = Language.English
let span = Language[6] // string!

const enum Flippable {
    Burger,
    Chair,
    Cup,
    Skate,
    Table
}

const flip = (f: Flippable) => `${f} flipped it`

const flippedNumber = flip(12) // ok

const enum SafeFlippable {
    Burger ='Burger',
    Chair = 'Chair',
    Cup = 'Cup',
    Skate = 'Skate',
    Table = 'Table'
}
