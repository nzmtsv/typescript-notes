// Операции типов не влияют на значения при выполнении

function asNumber(val: number | string): number {
    return val as number;
}

// function asNumber(val: number | string): number {
//     return typeof(val) === 'string' ? Number(val): val
// }
