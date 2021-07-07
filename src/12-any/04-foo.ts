// Если при рефакторинге вы разорвете преобразования , any может высколзнуть
// unknown спровоцирует ошибку

type Bar = string

declare const foo: Foo

let barAny = foo as any as Bar
let barUnk = foo as unknown as Bar
