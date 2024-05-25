const fs = require("fs");
const os = require("os");

console.log(os.userInfo());

fs.appendFile(
  "new file created using fs.txt",
  `Hey, this is coming for the owner: ${os.userInfo().username}`,
  () => console.log("file creation/modification completed")
);
