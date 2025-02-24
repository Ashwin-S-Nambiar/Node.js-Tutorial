# EJS (Embedded JavaScript)

EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. It is used to create dynamic web pages by embedding JavaScript code within HTML. EJS is easy to use and integrates seamlessly with Node.js applications.

## Key Features
- **Simple Syntax**: EJS uses plain JavaScript, making it easy to learn and use.
- **Fast Execution**: EJS templates are compiled into JavaScript functions, ensuring fast execution.
- **Flexibility**: EJS allows you to include JavaScript logic directly in your templates.
- **Partial Views**: You can create reusable components and include them in your templates.

## Example
```html
<% if (user) { %>
    <h2>Welcome, <%= user.name %>!</h2>
<% } else { %>
    <h2>Welcome, Guest!</h2>
<% } %>
```

In this example, EJS conditionally renders a welcome message based on the presence of a `user` object.

## Usage
To use EJS in a Node.js application, you need to install it via npm:
```bash
npm install ejs
```

Then, set EJS as the templating engine in your Express application:
```javascript
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
```

With EJS, you can create dynamic and interactive web pages with ease.