const {
    SlashCommandBuilder,
    EmbedBuilder
} = require("discord.js");

const memes = [
    "https://i.imgur.com/W3W0G7M.jpeg",
    "https://i.imgur.com/VgX8M7V.jpeg",
    "https://i.imgur.com/7K9L9Yw.jpeg",
    "https://i.imgur.com/qA2lB2E.jpeg"
];

module.exports = {

    data: new SlashCommandBuilder()
        .setName("meme")
        .setDescription("Xem meme ngẫu nhiên"),

    async execute(client, interaction) {

        const meme = memes[Math.floor(Math.random() * memes.length)];

        const embed = new EmbedBuilder()
            .setColor("#9B59B6")
            .setTitle("😂 Random Meme")
            .setImage(meme)
            .setFooter({
                text: `Yêu cầu bởi ${interaction.user.tag}`
            });

        await interaction.reply({
            embeds: [embed]
        });

    }

}