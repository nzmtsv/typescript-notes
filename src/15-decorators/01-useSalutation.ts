type constructor = { new(...args: any[]): {} };

function useNickName(nickName: string) {

    return function <T extends constructor> (target: T) {
        return class extends target {
            message = 'Hi ' + nickName

            sayHelloWithNickName() {
                console.log(`${this.message}`)
            }
        }
    }
}

@useNickName('foo')
class Greeter {
    constructor(public name: string) {}
    sayHello() {
        console.log(`Hello ${ this.name }`)
    }
}

