import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.post('/submit', (req, res) => {
    res.send('Form submitted successfully!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});