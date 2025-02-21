import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt([
        {
            message: "Enter the URL to be encoded in the QR code",
            name: "url",
        },
    ])
    .then((answers) => {
        const url = answers.url;  // Changed from answers.URL to answers.url
        let qr_pic = qr.image(url);
        qr_pic.pipe(fs.createWriteStream("qr_code.png"));
    })
    .catch((error) => {
        console.error("Error generating QR code:", error);
    });
