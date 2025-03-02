import express from 'express';
import bodyParser from 'body-parser';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// In-memory blog storage
const posts = [
    {
        id: uuidv4(),
        title: 'Welcome to My Blog',
        content: 'This is a sample blog post to get you started. Feel free to add your own posts!',
        author: 'Admin',
        date: new Date().toLocaleDateString()
    }
];

// Routes
app.get('/', (req, res) => {
    res.render('index', { posts: posts });
});

app.get('/post/:id', (req, res) => {
    const post = posts.find(post => post.id === req.params.id);
    res.render('post', { post: post });
});

app.get('/create', (req, res) => {
    res.render('create');
});

app.post('/create', (req, res) => {
    const newPost = {
        id: uuidv4(),
        title: req.body.title,
        content: req.body.content,
        author: req.body.author || 'Anonymous',
        date: new Date().toLocaleDateString()
    };
    posts.unshift(newPost);
    res.redirect('/');
});

app.get('/edit/:id', (req, res) => {
    const post = posts.find(post => post.id === req.params.id);
    res.render('edit', { post: post });
});

app.post('/edit/:id', (req, res) => {
    const index = posts.findIndex(post => post.id === req.params.id);
    if (index !== -1) {
        posts[index].title = req.body.title;
        posts[index].content = req.body.content;
        posts[index].author = req.body.author;
    }
    res.redirect('/');
});

app.post('/delete/:id', (req, res) => {
    const index = posts.findIndex(post => post.id === req.params.id);
    if (index !== -1) {
        posts.splice(index, 1);
    }
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});