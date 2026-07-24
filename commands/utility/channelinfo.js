const {
    SlashCommandBuilder,
    EmbedBuilder,
    ChannelType
} = require("discord.js");

module.exports = {

    data: new SlashCommandBuilder()
        .setName("channelinfo")
        .setDescription("Xem thông tin Channel")
        .addChannelOption(option =>
            option
                .setName("channel")
                .setDescription("Chọn Channel")
                .setRequired(true)
        ),

    async execute(client, interaction) {

        const channel = interaction.options.getChannel("channel");

        const types = {
            [ChannelType.GuildText]: "Text",
            [ChannelType.GuildVoice]: "Voice",
            [ChannelType.GuildCategory]: "Category",
            [ChannelType.GuildAnnouncement]: "Announcement",
            [ChannelType.GuildForum]: "Forum"
        };

        const embed = new EmbedBuilder()
            .setColor("#9B59B6")
            .setTitle(`# ${channel.name}`)
            .addFields(
                {
                    name: "🆔 ID",
                    value: channel.id,
                    inline: true
                },
                {
                    name: "📁 Type",
                    value: types[channel.type] || "Unknown",
                    inline: true
                },
                {
                    name: "📅 Created",
                    value: `<t:${Math.floor(channel.createdTimestamp / 1000)}:F>`
                }
            )
            .setTimestamp();

        await interaction.reply({
            embeds: [embed]
        });

    }

};