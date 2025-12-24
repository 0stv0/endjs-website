## MongoDB Example
```typescript
// new Mongo(url, database);
let mongo: Mongo = new Mongo("mongodb://localhost:27017/", "database");

// mongo.getCollection(name);
let coll = mongo.getCollection('users');
```