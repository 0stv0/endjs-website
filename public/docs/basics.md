## BASICS

Before you start, you need to initialize your project and install **EndJS**.

> These commands should be executed inside your project directory.

```bash
npm init -y
npm install endjs
```

## IN CODE
```typescript
import { Server } from "endjs";

const port: number = 3000;
const sv: Server = new Server(port);

sv.listen(() => {
    console.log(`API listening on http://localhost:${port}`);
});
```
And now you have empty listening http server.

## FIRST ROUTE

Creating your first route is as simple as creating server object.
> GET / POST / PUT / DELETE

```typescript
// sv.addRoute(path, method, async(req: EndRequest, res: EndResponse) => {});

sv.addRoute('/', 'GET', async(req, res) => {
    res.setStatus(200);
    res.send({ message: 'Hello from EndJS' });
});
```