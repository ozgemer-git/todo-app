const fs = require("fs");
let data = fs.readFileSync("data.json");
export default JSON.parse(data);
