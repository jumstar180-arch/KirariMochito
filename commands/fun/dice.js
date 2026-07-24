const {
    SlashCommandBuilder,
    EmbedBuilder
} = require("discord.js");

module.exports = {

    data: new SlashCommandBuilder()
        .setName("dice")
        .setDescription("Lắc xúc xắc"),

    async execute(client, interaction) {

        const dice = Math.floor(Math.random() * 6) + 1;

        const embed = new EmbedBuilder()
            .setColor("#9B59B6")
            .setTitle("🎲 Dice")
            .setDescription(`Bạn đã lắc được **${dice}**`);

        await interaction.reply({
            embeds: [embed]
        });

    }

}