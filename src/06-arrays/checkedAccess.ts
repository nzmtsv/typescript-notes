// часто нужно опереться на length
function checkedAccess<T>(data: ArrayLike<T>, i: number): T {
    if (i < data.length) {
        return data[i]
    }
    throw new Error('oops, beyond the end')
}
