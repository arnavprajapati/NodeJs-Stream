class MyEventEmitter {
    constructor() {
        this._events = {};
    }
    on(eventName, handler) {
        if (this._events[eventName]) {
            this._events[eventName].push(handler);
        } else {
            this._events[eventName] = [handler];
        }
    }
    emit(eventName) {
        this._events[eventName]?.forEach(event => event());
    }
}

const emitter = new MyEventEmitter();
emitter.on('x', () => console.log('Emitted event x'));
emitter.on('x', () => console.log('X'));
emitter.on('y', () => console.log('Emitted event y'));
emitter.emit('x');
emitter.emit('y');