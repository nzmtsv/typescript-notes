/**
 *  Переворачивает строку
 *  @param string строка
 */
function reverse(string: string): string
/**
 *  Переворачивает массив(разные комментарии, разные названия параметров)
 *  @param array массив
 */
function reverse<T>(array: T[]): string //!
function reverse(stringOrArray: string | any[] ) {
    return typeof stringOrArray === 'string'
        ? [...stringOrArray].reverse().join('')
        : stringOrArray.slice().reverse()
}


const reversed = reverse('typescript');

