import chalk from "chalk";
import handle from "./handle.js";

async function createPassword() {
    console.log(chalk.green('Creating new password'));
    const password = await handle();

    console.log("Your password is: " + chalk.yellow.bold(password))
}

export default createPassword;