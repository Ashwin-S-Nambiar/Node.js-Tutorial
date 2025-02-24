import express from 'express'

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const date = new Date();
    const day = date.getDay();
    let type = "a weekday";
    let advice = "it's time to work hard";

    if(day === 0 || day === 6) {
        type = "a weekend";
        advice = "it's time to relax";
    }
    
    res.render("index.ejs", {
        dayType: type,
        advice: advice,
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});