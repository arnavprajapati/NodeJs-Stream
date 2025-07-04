import fs from 'node:fs/promises'
import {EventEmitter} from 'events'

console.log("start");
setTimeout(() => {
    console.log("settimeout");
})
Promise.resolve().then(() => {
    console.log("promise");
})
console.log("end");

async function readFile() {
    const data = await fs.readFile('file.txt', 'utf-8');
    console.log(data);
}
readFile();
console.log('Hi');

const data = fs.readFileSync('file.txt', 'utf-8');
console.log(data);
console.log('Hi');

fs.readFile('file.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
console.log('Hi');

const emitter = new EventEmitter()
emitter.on('data', () => {
    console.log("event fired");
})
emitter.emit('data')

fs.readFile('fie.txt', 'utf-8')
    .then(data => console.log(data))
    .catch((err) => {
        const errorMessage = `${new Date().toLocaleTimeString()}\nError: ${err.message}\nStack: ${err.stack}}`
        fs.writeFile('error.log', errorMessage)
    })