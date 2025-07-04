import { EventEmitter } from 'events'

const h1 = document.querySelector('h1');
h1.addEventListener('click', () => {
    console.log('H1 clicked');
});

const emitter = new EventEmitter();
emitter.on('message', (data) => {
    console.log('Message:', data);
});
emitter.emit('message', 'Hello');