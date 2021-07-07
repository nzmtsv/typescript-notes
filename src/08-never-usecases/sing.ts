// void returns undefined, "never" never returns

function trimAndLower(text: string | null) {
    if (typeof text === "string") {
        return text.trim().toLowerCase()
    }

    if (text === null) {
        return null
    }

    return text
}

enum Size {
    S,
    M,
    L,
    XL,
}

function assertNever(value: never): never {
    throw Error(`Unexpected value '${value}'`)
}

// function getSize(size: Size) {
//     switch (size) {
//         case Size.S: return 'small'
//         case Size.M: return 'medium'
//         case Size.L: return 'large'
//         default: return assertNever(never)
//     }
//  }




