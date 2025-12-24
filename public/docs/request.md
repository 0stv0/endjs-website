## EndRequest Interface

All data provided in EndRequest
```txt
url: string => path from request
body: Record<string, any> => body parsed from POST & PUT requests
headers: Record<string, string> => headers received in request
params: Record<string, string> => all params in request url after ? in GET request
```

## POST Example
```typescript
sv.addRoute('/', 'POST', async(req, res) => {
    const nick: string = req.body['nick'];

    res.setStatus(200);
    res.send({
        message: `provided nick in body: ${nick}`
    });
});
```

## GET Example
```typescript
sv.addRoute('/', 'GET', async(req, res) => {
    const id: string = req.params['id'];

    res.setStatus(200);
    res.send({
        message: `provided id in url: ${id}`
    });
});
```