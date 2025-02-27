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

## EJS Tags

`<%= variable %>`               ==>     JS Output

`<% console.log("hello") %>`    ==>     JS Execute (Does not give o/p)   

`<%- <h1>Hello</h1> %>`         ==>     Render HTML

`<%% %%>`                       ==>     Escape character

`<%# Comment here  %>`          ==>     Stop Execution

`<%- include("header.ejs") %>`  ==>     Insert another EJS file

## Passing Data to EJS Templates

EJS templates can receive and display dynamic data from your Express routes. You pass data as an object to the `render` method, and then access these variables directly in your templates.

### Example

In your Express route:
```javascript
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page',
        user: { name: 'John Doe' },
        items: ['Item 1', 'Item 2', 'Item 3']
    });
});
```

In your EJS template (index.ejs):
```html
<h1><%= title %></h1>
<p>Welcome, <%= user.name %></p>
<ul>
    <% items.forEach(item => { %>
        <li><%= item %></li>
    <% }); %>
</ul>
```

This pattern allows you to separate your application logic from your presentation layer while maintaining a clean and maintainable codebase.

## Using the `locals` Object in EJS

The `locals` object in EJS is a special container that holds all variables passed to your template when it's rendered. Using the `locals` prefix allows you to explicitly access these variables within your templates.

### Benefits of Using `locals`

- **Error Prevention**: Using `locals.variable` instead of directly accessing a variable prevents "variable is not defined" errors if the variable doesn't exist
- **Safe Conditional Checks**: Makes it easy to check if optional data exists before using it
- **Code Clarity**: Explicitly shows that you're accessing data passed to the template

### Example

In your Express route:
```javascript
app.get('/profile', (req, res) => {
    // The user might be logged in or not
    const userData = getCurrentUser(); // Could be null
    
    res.render('profile', {
        title: 'User Profile',
        user: userData
    });
});
```

## EJS Templating System

### Partials and Layouts

#### Partials

EJS partials are reusable templates that can be included in other EJS templates. They help maintain DRY (Do not Repeat Yourself) principles by allowing you to define common UI components once and reuse them throughout your application.
**Usage:**

```html
<!-- Create a partial in views/partials/header.ejs -->
<header>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
</header>

<!-- Include it in another template -->
<%- include('../partials/header') %>
<h1>Welcome to my page</h1>
```

Partials are perfect for components like headers, footers, navigation bars, and other UI elements that appear across multiple pages.

#### Layouts

Layouts provide a way to define a common structure for your pages, such as headers, footers, and navigation, while allowing page-specific content to be injected in designated areas. Unlike partials that are included within templates, layouts wrap around your content.

**Implementation:**

One popular approach is using the `ejs-mate` or similar layout packages:

```javascript
// In your Express app setup
const ejsMate = require('ejs-mate');
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
```

```html
<!-- views/layouts/main.ejs -->
<!DOCTYPE html>
<html>
<head>
        <title><%= title %></title>
        <link rel="stylesheet" href="/css/main.css">
</head>
<body>
        <header><%- include('../partials/header') %></header>
        <main>
                <%- body %>
        </main>
        <footer><%- include('../partials/footer') %></footer>
</body>
</html>

<!-- In a page template -->
<% layout('layouts/main') %>
<h1>Page Content</h1>
<p>This content will be injected into the layout's body section.</p>
```

Layouts help maintain consistency across your application while reducing repetitive boilerplate code in individual templates.
