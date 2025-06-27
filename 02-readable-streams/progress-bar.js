import fs from 'node:fs';
import path from 'node:path';

const source = process.argv[2];
const destination = process.argv[3];
const fileName = process.argv[4];

if (!fs.existsSync(source)) {
    console.error('Source file does not exist!');
    process.exit(1);
}

const fullPath = path.join(destination, fileName);

if (fs.existsSync(fullPath)) {
    fs.unlinkSync(fullPath); 
}

const stats = fs.statSync(source);
const fileSize = stats.size;
let bytesRead = 0;

const readStream = fs.createReadStream(source, { highWaterMark: 1024 * 1024 });
const writeStream = fs.createWriteStream(fullPath);

readStream.on('data', (chunkBuffer) => {
    bytesRead += chunkBuffer.byteLength;
    const progress = (bytesRead / fileSize) * 100;
    console.log(`Progress: ${progress.toFixed(2)}%`);
    writeStream.write(chunkBuffer);
});

readStream.on('end', () => {
    writeStream.end();
    console.log('Copy complete!');
});

readStream.on('error', (err) => {
    console.error('Read error:', err.message);
});
writeStream.on('error', (err) => {
    console.error('Write error:', err.message);
});