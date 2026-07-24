const {
SlashCommandBuilder,
EmbedBuilder
}=require("discord.js");

module.exports={

data:new SlashCommandBuilder()
.setName("help")
.setDescription("Danh sách lệnh"),

async execute(client,interaction){

const embed=new EmbedBuilder()
.setColor("#9B59B6")
.setTitle("🌸 Kirari Mochito")
.setDescription("Danh sách Commands")

.addFields(

{
name:"🛠 Utility",
value:"`/ping`\n`/avatar`\n`/help`"
},

{
name:"🎵 Music",
value:"`/play`"
}

)

.setFooter({
text:"Kirari Mochito"
});

interaction.reply({
embeds:[embed]
});

}

}