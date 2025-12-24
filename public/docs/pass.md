## Password Example
```typescript
let plain: string = "plain-pass";

// createPass = async(plain, saltRounds? - default 16);
let hash1: string = await createPass(plain, 24);
let hash2: string = await createPass(plain);

// checkPass = async(plain, hash);
let check: boolean = await checkPass(plain, hash1);
```