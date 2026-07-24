const { REST, Routes } = require("discord.js");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const commands = [];

const foldersPath = path.join(__dirname, "commands");
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);

    const commandFiles = fs
        .readdirSync(commandsPath)
        .filter(file => file.endsWith(".js"));

    for (const file of commandFiles) {

        const command = require(path.join(commandsPath,file));

        commands.push(command.data.toJSON());

    }
}

const rest = new REST({ version:"10" }).setToken(process.env.TOKEN);

(async()=>{

try{

console.log(`Deploying ${commands.length} commands...`);

await rest.put(

Routes.applicationGuildCommands(

process.env.CLIENT_ID,

process.env.GUILD_ID

),

{ body: commands }

);

console.log("Deploy Success");

}catch(err){

console.error(err);

}

})();