import prompt from 'prompt';
import promptMain from "./prompts/prompt-main.js"
import createPassword from "./services/password/create.js"
import createQrCode from "./services/qr-code/create.js";

async function main(){
    prompt.get(promptMain, async (err, choose) => {
        if(choose.select == 1) await createQrCode();
        if(choose.select == 2) await createPassword();
    });

    prompt.start();
}

main();

//console.log("Test another remote git user");
