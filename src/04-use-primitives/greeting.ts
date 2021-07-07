// По возможности используйте примитивные типы, для избежании коллизий

// function isGreeting(phrase: String) {
//     return [
//         'hello',
//         'hi'
//     ].includes(phrase);
// }

// можно вызывать без new, так как примитивы
typeof BigInt(1234) // bigint
typeof Symbol('sym') // symbol
