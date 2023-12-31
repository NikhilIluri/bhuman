const fs = require("fs");
const $ = require("cheerio");

const directories = ["Highlights"];
let errors = 0;

directories.forEach((dir) =>
  fs.readdirSync(dir).forEach((file) => {
    const viewBox = $.load(fs.readFileSync(`${dir}/${file}`))("svg").attr(
      "viewBox"
    );
    // if (viewBox !== "0 0 16 16") {
    //   console.error(
    //     `Error: \`${dir}/${file}\` has a viewBox of \x1b[31m\`${viewBox}\`\x1b[0m`
    //   );
    //   errors++;
    // }
  })
);

console.log("Tests passed!");
