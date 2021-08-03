type ClassConstructor<T> = new(...args: any[]) => T

function serializable<
    T extends ClassConstructor<{
        getValue(): string
    }>
>(Constructor: T){
    return class extends Constructor {
        serialize() {
            return this.getValue().toString()
        }
    }
}
