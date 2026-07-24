const {
SlashCommandBuilder,
EmbedBuilder
}=require("discord.js");

module.exports={

data:new SlashCommandBuilder()
.setName("serverinfo")
.setDescription("Thông tin server"),

async execute(client,interaction){

const guild=interaction.guild;

const embed=new EmbedBuilder()

.setColor("#9B59B6")

.setTitle(guild.name)

.setThumbnail(guild.iconURL())

.addFields(

{
name:"👥 Members",
value:`${guild.memberCount}`,
inline:true
},

{
name:"🆔 ID",
value:guild.id,
inline:true
},

{
name:"📅 Created",
value:`<t:${parseInt(guild.createdTimestamp/1000)}:R>`
}

);

interaction.reply({
embeds:[embed]
});

}

}