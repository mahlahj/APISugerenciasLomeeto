import "@babel/polyfill";

import app from "./server";

async function main () {
    await app.listen(app.get("port"));
    console.log("Sevidor en puerto", 3000);
}

main();