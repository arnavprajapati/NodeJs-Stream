import fs from 'node:fs/promises'


fs.readFile("C:\\Users\\G3\\OneDrive\\Desktop\\john.mkv", (err, data) => {
    fs.writeFile('hd.mkv', data, (err) => {
        if(err) throw err
        console.log("file moved");
    })
})

async function fileTransfer() {
    const readFile = await fs.readFile("C:\\Users\\G3\\OneDrive\\Desktop\\john.mkv")
    await fs.writeFile('hello.mkv', readFile)
    console.log("file transfer successfully");
}

async function fileTransfer1() {
    const readFile = await fs.readFile("C:\\Users\\G3\\OneDrive\\Desktop\\john.mkv")
    await fs.writeFile('hello.mkv', readFile)
    console.log("file transfer successfully");
}

async function run() {
    await fileTransfer();
    await fileTransfer1();
}
run();