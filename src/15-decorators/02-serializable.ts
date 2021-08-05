type ClassConstructor<T> = new(...args: any[]) => T

function serializable<
    T extends ClassConstructor<{
        getValue(): string  // класс с методом getValue()
    }>
>(Constructor: T){
    return class extends Constructor {
        serialize() {
            return this.getValue().toString()
        }
    }
}
