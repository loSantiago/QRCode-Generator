import chalk from "chalk";
import qr from "qrcode-terminal";
import getUserFolders from "user-folders";
import writeFile from "write-file";

//Global vars
let pathToSaveQRCodeImage;

//Get user downloads directory.
await getUserFolders().then((folders) => {
    pathToSaveQRCodeImage = folders.download;
})

//Handler function.
async function handler(err, result) {
    if(err){
        let text = chalk.red.bold("Occur an error, follow code and message!");
        console.log(text);
        console.log(err);
    }

    //Save in disk
    if(result.type === '1'){
        qr.generate(result.link, {small : false}, qrcode => {
            console.log(chalk.green("Qr Code generated successfully.\n"));
            //Write file in disk
            writeFile(pathToSaveQRCodeImage + "/" + "QRimagem.jpg", qrcode, function (err) {
                if (err) return console.log(err)
                console.log('file is written')
            })
        });
    }
    else{ //Show in terminal
        qr.generate(result.link, {small : true}, qrcode => {
            console.log(chalk.green("Qr Code generated successfully.\n"));
            console.log(qrcode);
        });
    }

}

//Export.
export default handler;