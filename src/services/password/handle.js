async function permittedCharacters(){
    let permitted = []
    
    if(process.env.UPPERCASE_LETTERS === "true")
        permitted.push(... "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    if(process.env.LOWERCASE_LETTERS === "true")
        permitted.push(... "abcdefghijklmnopqrstuvwxyz")
    if(process.env.NUMBERS === "true")
        permitted.push(... "0123456789")
    if(process.env.SPECIAL_CHARACTERS === "true")
        permitted.push(... "!@$%&*()_-+/")

    return permitted;
}

async function handle(req, res) {
    let chars = [];
    let password = ""
    const passLength = process.env.PASSWORD_LENGTH

    //Add characts to char array.
    chars = await permittedCharacters();
    
    //Form the new pass.
    for(let i = 0; i < passLength; i++){
        let index = Math.floor(Math.random() * chars.length)
        password += chars[index];
    }

    return password;
}

export default handle;