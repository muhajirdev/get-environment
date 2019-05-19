# `get-env`

## Getting Started

### Installation

```bash
npm install --save get-environment
```

or

```bash=
yarn get-environment
```

### Use Case

Let say you have environment like this

```
AUTH_TOKEN=u89dafjfksafj98uafs
SEND_NOTIFICATION=TRUE
```

You can use it this way

```javascript
import { getEnvAndEnsure } from "get-environment";

const AUTH_TOKEN = getEnvAndEnsure("AUTH_TOKEN");
// => u89dafjfksafj98uafs

const SEND_NOTIFICATION = getEnvAndEnsure("SEND_NOTIFICATION");
// => true [in boolean]
```

NOTE: If you're using pure nodejs environment. You might want to import it this way

```javascript
const { getEnvAndEnsure } = require("get-environment");
```

If the the environment is not found. It will throw Error. So it will make sure all required environment is specified

Another example, you have environment like this

```
USERS=john, mike, sharon,
```

```javascript
import { getEnvAndEnsure } from "get-environment";

const USERS = getEnvAsArray("USERS");
// => ["john", "mike", "sharon"]
```

Using with JSON? Probably a little bit hacky

But here's an example

```
COLORS={ "red": "#ff0000", "green": "#00ff00", "blue": "#0000ff" }
```

```javascript
const COLORS = JSON.parse(
  getEnvAndEnsure("COLORS") ? getEnvAndEnsure("COLORS") : "{}"
);
// => { red: "#ff0000", green: "#00ff00", blue: "#0000ff" }
```
