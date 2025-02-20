const fs = require("fs");

fs.writeFile("message.txt", "Hello GitHub from Node.js", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
});

fs.readFile("./msg.txt", 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})