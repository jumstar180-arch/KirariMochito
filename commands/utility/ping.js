const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Xem độ trễ của bot"),

    async execute(client, interaction) {

        const embed = new EmbedBuilder()
            .setColor("#9B59B6")
            .setTitle("🏓 Pong!")
            .addFields(
                {
                    name: "Bot Ping",
                    value: `${client.ws.ping} ms`,
                    inline: true
                },
                {
                    name: "API",
                    value: "Discord",
                    inline: true
                }
            )
            .setTimestamp();

        await interaction.reply({
            embeds: [embed]
            ("Pong!")
        });

    }
}