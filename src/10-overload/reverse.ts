/**
 *
 *  Переворачивает строку или массив
 *  @param stringOrArray строка или массив
 */
function reverse(stringOrArray: string | any[] ) {
    return typeof stringOrArray === 'string'
        ? [...stringOrArray].reverse().join('')
        : stringOrArray.slice().reverse()
}


// /**
//  *  Переворачивает строку
//  *  @param string строка
//  */
// function reverse(string: string): string
// /**
//  *  Переворачивает массив
//  *  @param array массив
//  */
// function reverse<T>(array: T[]): string //!
// function reverse(stringOrArray: string | any[] ) {
//     return typeof stringOrArray === 'string'
//         ? [...stringOrArray].reverse().join('')
//         : stringOrArray.slice().reverse()
// }
//
//
// const reversed = reverse('typescript');

