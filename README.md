# snspup
Scott's Not So Proficient Utility Package. 

## Example usage
```
import api from "./index.js"

//Testing the query builder
let queryDecodeTest = "someapithing?key=mom&data=he&bruh=me"
console.log(api.queryBuilder.decode(queryDecodeTest))

let queryEncodeTest = {key: "mom", "data": "he", bruh: "me"}
console.log(api.queryBuilder.encode(queryEncodeTest))
```