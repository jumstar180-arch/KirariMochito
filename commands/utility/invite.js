const {
    SlashCommandBuilder,
    EmbedBuilder,
    ButtonBuilder,
    ButtonStyle,
    ActionRowBuilder
} = require("discord.js");

module.exports = {

    data: new SlashCommandBuilder()
        .setName("invite")
        .setDescription("Lấy link mời bot"),

    async execute(client, interaction) {

        const invite =
            "https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=8&scope=bot%20applications.commands";

        const embed = new EmbedBuilder()
            .setColor("#9B59B6")
            .setTitle("📨 Mời Kirari Mochito")
            .setDescription(
                "Nhấn nút bên dưới để mời bot vào server của bạn."
            )
            .setThumbnail(client.user.displayAvatarURL())
            .setFooter({
                text: "Kirari Mochito"
            });

        const button = new ButtonBuilder()
            .setLabel("➕ Mời Bot")
            .setStyle(ButtonStyle.Link)
            .setURL(invite);

        const row = new ActionRowBuilder().addComponents(button);

        await interaction.reply({
            embeds: [embed],
            components: [row]
        });

    }

}