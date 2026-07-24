const {
    SlashCommandBuilder,
    EmbedBuilder
} = require("discord.js");

module.exports = {

    data: new SlashCommandBuilder()
        .setName("userinfo")
        .setDescription("Xem thông tin người dùng")
        .addUserOption(option =>
            option
                .setName("user")
                .setDescription("Chọn người dùng")
                .setRequired(false)
        ),

    async execute(client, interaction) {

        const member =
            interaction.options.getMember("user") ||
            interaction.member;

        const user = member.user;

        const embed = new EmbedBuilder()
            .setColor("#9B59B6")
            .setAuthor({
                name: user.tag,
                iconURL: user.displayAvatarURL()
            })
            .setThumbnail(user.displayAvatarURL({
                dynamic: true,
                size: 4096
            }))
            .addFields(
                {
                    name: "👤 Username",
                    value: user.username,
                    inline: true
                },
                {
                    name: "🆔 User ID",
                    value: user.id,
                    inline: true
                },
                {
                    name: "🤖 Bot",
                    value: user.bot ? "Có" : "Không",
                    inline: true
                },
                {
                    name: "📅 Tạo tài khoản",
                    value: `<t:${Math.floor(user.createdTimestamp / 1000)}:F>`
                },
                {
                    name: "📥 Tham gia Server",
                    value: `<t:${Math.floor(member.joinedTimestamp / 1000)}:F>`
                }
            )
            .setFooter({
                text: `Yêu cầu bởi ${interaction.user.tag}`
            })
            .setTimestamp();

        await interaction.reply({
            embeds: [embed]
        });

    }

}