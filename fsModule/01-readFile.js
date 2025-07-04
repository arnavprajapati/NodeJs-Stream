// 1. FS Module Object
// import fs from 'fs';
import fs from 'fs:/promises';
console.log(fs); // FS object 

// 2. readFileSync (Synchronous)
import fs from 'fs';
const contentBuffer = fs.readFileSync('./index.html'); // Buffer
console.log(contentBuffer.toString()); // String
const content1 = fs.readFileSync('./index.html', 'utf-8'); // String directly
console.log(content1);

// 3. readFile (Callback-based Async)
import fs from 'fs';
fs.readFile('./index.html', 'utf-8', (err, data) => {
    if (err) console.log('Error:', err);
    else console.log('Content:', data);
});
console.log('End');

// 4. fs.promises.readFile (Promise-based Async)
import fs from 'fs/promises';
async function readFileContent() {
    const content = await fs.readFile('./index.html', 'utf-8');
    console.log('Content:', content);
    console.log('End');
}
readFileContent();

// 5. Performance Demo (Async vs Sync)
import fs from 'fs/promises';
let i = 0;
const timerId1 = setInterval(() => {
    console.log(i);
    i++;
    if (i === 1000) clearInterval(timerId1);
}, 1);
async function readBigFile() {
    const content = await fs.readFile('./bigfile.txt', 'utf-8');
    console.log('Reading done');
}
readBigFile();

// Sync Version
import fs from 'fs';
let j = 0;
const timerId2 = setInterval(() => {
    console.log(i);
    i++;
    if (i === 1000) clearInterval(timerId2);
}, 1);


const content = fs.readFileSync('./bigfile.txt', 'utf-8');
console.log('Reading done');