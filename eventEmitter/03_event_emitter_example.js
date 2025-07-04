import { EventEmitter } from 'events'

const emitter = new EventEmitter();

function namedHandler() {
    console.log("Named ABC handler");
}
emitter.on('abc', namedHandler);
emitter.on('abc', () => {
    console.log('ABC fired 1');
});
emitter.on('abc', () => {
    console.log('ABC fired 2');
});

console.log("\nEmitting 'abc'...");
emitter.emit('abc');

emitter.on('x', () => console.log('X event fired'));
emitter.on('y', () => console.log('Y event fired'));
emitter.setMaxListeners(2);
emitter.on('y', () => console.log('Y event fired again'));

emitter.once('abc', () => console.log('ABC event fired once'));

console.log("\nEmitting 'abc' again...");
emitter.emit('abc');

console.log("\nEmitting 'abc' third time...");
emitter.emit('abc');

console.log("\n_internal _events object:");
console.log(emitter._events);

console.log("\nRegistered Listeners:");
const dataa = emitter._events;
for (const eventName in dataa) {
    const listeners = dataa[eventName];

    if (Array.isArray(listeners)) {
        listeners.forEach((fn, index) => {
            const actualFn = fn.listener || fn;
            console.log(`${eventName}[${index}] - name: ${actualFn.name || 'anonymous'}`);
            console.log(actualFn.toString());
        });
    }
}

console.log("\nListener Count:");
console.log("abc:", emitter.listenerCount('abc'));
console.log("x:", emitter.listenerCount('x'));
console.log("y:", emitter.listenerCount('y'));

console.log("\nRegistered Event Names:", emitter.eventNames());
