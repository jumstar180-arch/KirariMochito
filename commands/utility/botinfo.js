const {
SlashCommandBuilder,
EmbedBuilder
}=require("discord.js");

module.exports={

data:new SlashCommandBuilder()
.setName("botinfo")
.setDescription("Thông tin bot"),

async execute(client,interaction){

const embed=new EmbedBuilder()

.setColor("#9B59B6")

.setTitle(client.user.username)

.setThumbnail(client.user.displayAvatarURL())

.addFields(

{
name:"Servers",
value:`${client.guilds.cache.size}`,
inline:true
},

{
name:"Users",
value:`${client.users.cache.size}`,
inline:true
},

{
name:"Ping",
value:`${client.ws.ping}ms`,
inline:true
}

)

.setTimestamp();

interaction.reply({
embeds:[embed]
});

}

}