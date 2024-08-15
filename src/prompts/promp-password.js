import chalk from 'chalk';

const promptPassword = [
    {
        name: "link",
        description: chalk.yellow("Link to generate the QR Code: "),
    },
    {
        name: "type",
        description: chalk.yellow.bold("Generate the QR Code in (1-IMAGE) or (2-TERMINAL) : "),
        pattern: /^[1-2]+$/,
        message: chalk.red.bgWhiteBright("Only select a value between 1 or 2."),
        required: true,
    }
]

export default promptPassword;