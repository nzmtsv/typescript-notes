// Типобезопасные обертки
//
// import EventEmitter from 'events'
//
// export default class SafeEmitter<Events extends Record<PropertyKey, unknown[]>> {
//     private emitter = new EventEmitter();
//
//     emit<K extends keyof Events>(
//         channel: K,
//         ...data: Events[K]
//     ) {
//         return this.emitter.emit(channel, ...data)
//     }
//
//
//     on<K extends keyof Events>(
//         channel: K,
//         listener: (...data: Events[K]) => void
//     ) {
//         return this.emitter.on(channel, listener)
//     }
// }
