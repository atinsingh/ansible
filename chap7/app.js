const fs = require('fs');
const util = require('util');

const fs_readdir = util.promisify(fs.readdir);

(async() => {
    const file = await fs_readdir(".");
    for (let fn of file) {
        console.log(fn);
    }
})().catch(err => {
    console.error();
})