import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let isUserAuthenticated = false;

// bodyParser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Check if the user is authenticated middleware
function secretCheck(req, res, next) {
    const password = req.body["password"];
    if (password === "ILoveProgramming") {
        isUserAuthenticated = true;
    }
    next();
}

app.use(secretCheck);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Check if the user is authenticated and redirect to the secret page after login
app.post("/check", (req, res) => {
    if (isUserAuthenticated) {
        res.sendFile(__dirname + "/public/secret.html");
    }
    else {
        res.redirect("/");
    }
});

app.listen(port ,() => {
    console.log(`Listening on port ${port}`);
});
