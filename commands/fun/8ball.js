const {
    SlashCommandBuilder,
    EmbedBuilder
} = require("discord.js");

const answers = [
    "✅ Chắc chắn rồi.",
    "😁 Có.",
    "🤔 Có thể.",
    "😅 Khó nói.",
    "❌ Không.",
    "🙃 Mình không nghĩ vậy.",
    "🔥 Rất có khả năng.",
    "💀 Đừng mong."
];

module.exports = {

    data: new SlashCommandBuilder()
        .setName("eightball")
        .setDescription("Quả cầu tiên tri")
        .addStringOption(option =>
            option
                .setName("question")
                .setDescription("Câu hỏi của bạn")
                .setRequired(true)
        ),

    async execute(client, interaction) {

        const question = interaction.options.getString("question");

        const answer =
            answers[Math.floor(Math.random() * answers.length)];

        const embed = new EmbedBuilder()
            .setColor("#9B59B6")
            .setTitle("🎱 Magic 8 Ball")
            .addFields(
                {
                    name: "❓ Câu hỏi",
                    value: question
                },
                {
                    name: "💬 Trả lời",
                    value: answer
                }
            );

        await interaction.reply({
            embeds: [embed]
        });

    }

}