const {
    SlashCommandBuilder,
    EmbedBuilder
} = require("discord.js");

module.exports = {

    data: new SlashCommandBuilder()
        .setName("coinflip")
        .setDescription("Tung đồng xu"),

    async execute(client, interaction) {

        const result = Math.random() < 0.5 ? "🪙 Ngửa" : "🪙 Sấp";

        const embed = new EmbedBuilder()
            .setColor("#9B59B6")
            .setTitle("🪙 Coin Flip")
            .setDescription(result);

        await interaction.reply({
            embeds: [embed]
        });

    }

}