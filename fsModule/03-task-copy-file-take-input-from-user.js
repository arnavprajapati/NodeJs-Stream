import fs from 'node:fs/promises'

async function copyCommand() {
    
    const sourcePath = process.argv[2];
    const destPath = process.argv[3];

    try {
        const content = await fs.readFile(sourcePath);
        await fs.writeFile(destPath, content);
        console.log(`File copied from ${sourcePath} to ${destPath}`);
    } catch (err) {
        const errorMessage = `${new Date().toLocaleTimeString()}\nError: ${err.message}\nStack: ${err.stack}\n\n`;
        await fs.appendFile('./error.log', errorMessage);
        console.log('Error occurred, check error.log');
    }
}
copyCommand()