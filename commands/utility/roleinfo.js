const {
    SlashCommandBuilder,
    EmbedBuilder
} = require("discord.js");

module.exports = {

    data: new SlashCommandBuilder()
        .setName("roleinfo")
        .setDescription("Xem thông tin Role")
        .addRoleOption(option =>
            option
                .setName("role")
                .setDescription("Chọn Role")
                .setRequired(true)
        ),

    async execute(client, interaction) {

        const role = interaction.options.getRole("role");

        const embed = new EmbedBuilder()
            .setColor(role.color || "#9B59B6")
            .setTitle(`🎭 ${role.name}`)
            .addFields(
                {
                    name: "🆔 ID",
                    value: role.id,
                    inline: true
                },
                {
                    name: "👥 Members",
                    value: `${role.members.size}`,
                    inline: true
                },
                {
                    name: "🎨 Color",
                    value: role.hexColor,
                    inline: true
                },
                {
                    name: "📅 Created",
                    value: `<t:${Math.floor(role.createdTimestamp / 1000)}:F>`
                }
            )
            .setTimestamp();

        await interaction.reply({
            embeds: [embed]
        });

    }

};