# Partials and Layouts

## Partials

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

## Layouts

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
