## EndResponse Interface

All data provided in EndResponse
```txt
setStatus: (code: number) => void => set respond code
send: (body: Record<string, any>) => void => send json body
```

## Example
```typescript
sv.addRoute('/', 'GET', async(req, res) => {
    res.setStatus(200);
    res.send({
        message: `send function in interface`
    });
});
```