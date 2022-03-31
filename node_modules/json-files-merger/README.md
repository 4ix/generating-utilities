# JSON Files Merger ✨

## Exammple

Load all json files located in `/json_files` and merge the json data to a single json object.

For example, you have two json fils in folder `/json_files`

```
.examples/json_files
├── 01_user.json
└── 02_home.json
```

```
// .examples/demo.js
const jsonMerger = require("json-files-merger");

const targetFolder = "json_files";
const mergedJsonObject = jsonMerger.load(targetFolder);

console.log(mergedJsonObject);

```

# License

MIT © Xun Zhou
