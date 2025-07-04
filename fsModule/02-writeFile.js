#!/usr/bin/env node
import fs from 'fs/promises';

// 1. writeFile Example
async function writeToFile() {
    await fs.writeFile('./file.txt', 'Hello, World!');
    console.log('File written successfully');
}

// 2. appendFile Example
async function appendToFile() {
    await fs.appendFile('./file.txt', '\nHello, World!');
    console.log('Content appended successfully');
}

// 3. Task 1: Copy File
async function copyFile() {
    try {
        const content = await fs.readFile('C:\\Users\\YourUsername\\Desktop\\file.txt', 'utf-8');
        await fs.writeFile('./output.txt', content);
        console.log('File copied successfully');
    } catch (err) {
        console.error('Error:', err.message);
    }
}

// 4. Task 2: Digital Clock
async function digitalClock() {
    setInterval(async () => {
        const time = new Date().toLocaleTimeString();
        await fs.writeFile('./time.txt', time);
        console.log(`Time updated: ${time}`);
    }, 1000);
}

// Run one function at a time
// writeToFile();
// appendToFile();
// copyFile();
// digitalClock();