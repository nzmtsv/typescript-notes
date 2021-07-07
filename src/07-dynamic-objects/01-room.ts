// Проверяйте пределы свойств

interface Room {
    numDoors: number
    ceilingHeight: number
}

// const r: Room = { // спровоцировали проверку лишних свойств
//     numDoors: 1,
//     ceilingHeight: 10,
//     elephant: true,
// }

const obj = {
    numDoors: 4,
    ceilingHeight: 3,
    elephant: true,
}

const room: Room = obj // ok

// interface Room {
//     numDoors: number
//     ceilingHeight: number
//     [otherOptions: string]: unknown //!
// }
