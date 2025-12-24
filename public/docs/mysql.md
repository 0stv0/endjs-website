## MySQL Example
```typescript
// new MySQL(host, port, database, user, password);
let mysql: MySQL = new Mysql("localhost", 3306, "project", "root", "");

// await query(sql: string, keys: any[]) => Promise<RowDataPacket[]>
let res: RowDataPacket[] = await mysql.query("SELECT * FROM users WHERE id = ?", [1]);
await mysql.query("INSERT INTO users (id, role) VALUES (?, ?)", [1, 'ADMIN'])
```