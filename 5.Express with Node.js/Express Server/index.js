import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact</h1>");
});

app.post("/register", (req, res) => {
    res.sendStatus(200);
});

app.post("/upgrade", (req, res) => {
    res.sendStatus(200);
});

app.patch("/update", (req, res) => {
    res.sendStatus(200);
});

app.delete("/remove", (req, res) => {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});