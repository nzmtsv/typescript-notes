// Пространство типов и пространство значений
interface PersonData {
    age: number
}

// function generateEmail(options: { person: Person, subject: string, body: string }) {
//     // ...
//     return options
// }

// // Person и string воспринимаются в контексте значений?
// function generateEmail({ person: Person, subject: string, body: string }) {
//     // ...
// }

function generateEmail(
    { person, subject, body }: { person: Person, subject: string, body: string }) {
    //...
    return {
        person,
        subject,
        body,
    }
}





