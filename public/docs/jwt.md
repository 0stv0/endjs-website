## JWT Example
```typescript
let SECRET = "SUPERSECRETJWTKEY"; // For your own good keep it in .env

// genToken(user: string, expiresIn: number (seconds), secret: string)
let token: string = genToken('stevku', 3600, SECRET);

// checkToken(user: string, token: string)
let check: boolean = checkToken('user', 'sometoken');
```