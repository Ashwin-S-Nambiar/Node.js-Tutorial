# Middleware

**Middleware is a request handler that allows you to intercept and manipulate requests and responses before they reach route handlers.**

**These functions have access to the request and response objects, and they can perform various tasks such as modifying the request, authenticating users, logging data, or ending the request-response cycle.**

## Types of Middleware
- **Preporocessing** - eg, **body-parser**
- **Authentication**
- **Error handling**
- **Logging requests** - eg, **morgan**