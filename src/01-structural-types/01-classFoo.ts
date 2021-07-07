// структурная или номинальная типизация?
class Foo {
    bar: string;
    constructor(bar: string) {
        this.bar = bar;
    }
}

const f = new Foo('instance of Foo');
const strangeInstance: Foo = { bar: 'object'} // !?
