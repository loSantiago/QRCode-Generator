import chalk from 'chalk';

const promptMain = [
    {
        name : "select",
        description : chalk.yellow.bold("Choose the tool (1 - QrCode ou 2 - Password)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.bgWhiteBright("Only select a value between 1 or 2."),
        required: true,
    },
]

export default promptMain;