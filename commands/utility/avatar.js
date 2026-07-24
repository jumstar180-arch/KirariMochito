const {
    SlashCommandBuilder,
    EmbedBuilder
} = require("discord.js");

module.exports = {

    data: new SlashCommandBuilder()
        .setName("avatar")
        .setDescription("Xem avatar")
        .addUserOption(option =>
            option
                .setName("user")
                .setDescription("Chọn người dùng")
        ),

    async execute(client, interaction) {

        const user =
            interaction.options.getUser("user") ||
            interaction.user;

        const embed = new EmbedBuilder()
            .setColor("#9B59B6")
            .setTitle(`${user.username}`)
            .setImage(
                user.displayAvatarURL({
                    size: 4096,
                    dynamic: true
                })
            );

        await interaction.reply({
            embeds: [embed]
        });

    }

}