const sqlite3 = require("sqlite3");

const path = require("path");
const dbPath = path.resolve(__dirname, 'test.db');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('success')
    }
});

module.exports = db