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
    emit(eventName, ...args) {
        this._events[eventName]?.forEach(event => event(...args));
    }
}

const emitter = new MyEventEmitter();
emitter.on('abc', (data) => console.log(data));
emitter.emit('abc', 'Hello');