// Объявление типа лучше, чем его утверждение

interface Person { name: string }

const alice: Person = { name: 'Alice' }
const bob =  { name: 'Bob' } as Person // оk

// const aliceChain: Person = {
//     name: 'Alice',
//     occupation: 'Doctor'
// }

// const bob = {
//     name: 'Bob',
//     occupation: 'teacher'
// } as Person // ok
