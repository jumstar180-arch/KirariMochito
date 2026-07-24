const {
    SlashCommandBuilder,
    EmbedBuilder
} = require("discord.js");

module.exports = {

    data: new SlashCommandBuilder()
        .setName("uptime")
        .setDescription("Xem thời gian hoạt động của bot"),

    async execute(client, interaction) {

        const totalSeconds = Math.floor(process.uptime());

        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor(totalSeconds % 86400 / 3600);
        const minutes = Math.floor(totalSeconds % 3600 / 60);
        const seconds = totalSeconds % 60;

        const embed = new EmbedBuilder()
            .setColor("#9B59B6")
            .setTitle("⏰ Uptime")
            .setDescription(
                `**${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây**`
            )
            .setTimestamp();

        await interaction.reply({
            embeds: [embed]
        });

    }

};