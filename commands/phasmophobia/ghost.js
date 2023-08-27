const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ghost')
		.setDescription('Returns ghost behaviour')
        .addStringOption(option =>
            option.setName('name')
                .setDescription('Ghost name')
                .setRequired(true)
                .addChoices(
                    { name: 'Banshee', value: 'Banshee' },
                    { name: 'Demon', value: 'demon' },
                    { name: 'Deogen', value: 'deogen' },
                    { name: 'Goryo', value: 'goryo' },
                    { name: 'Hantu', value: 'hantu' },
                    { name: 'Jinn', value: 'jinn' },
                    { name: 'Mare', value: 'mare' },
                    { name: 'Moroi', value: 'moroi' },
                    { name: 'Myling', value: 'myling' },
                    { name: 'Obake', value: 'obake' },
                    { name: 'Oni', value: 'oni' },
                    { name: 'Onryo', value: 'onryo' },
                    { name: 'Phantom', value: 'phantom' },
                    { name: 'Poltergeist', value: 'poltergeist' },
                    { name: 'Raiju', value: 'raiju' },
                    { name: 'Revenant', value: 'revenant' },
                    { name: 'Shade', value: 'shade' },
                    { name: 'Spirit', value: 'spirit' },
                    { name: 'Thaye', value: 'thaye' },
                    { name: 'The Mimic', value: 'mimic' },
                    { name: 'The Twins', value: 'twins' },
                    { name: 'Wraith', value: 'wraith' },
                    { name: 'Yokai', value: 'yokai' },
                    { name: 'Yurei', value: 'yurei' }
                )),
	async execute(interaction) {

        const ghosts = {
            spirit: {
                name: "Spirit",
                tells: ["Smudging the ghost will prevent a hunt for 180s instead of the normal 90s"],
                speed: "1.7m/s",
                sanity: "50%",
                evidence: ["EMF 5", "Spirit Box", "Ghost Writing"],
            },
            wraith: {
                name: "Wraith",
                tells: ["Won't step in salt", "Won't be slowed by tier 3 salt", "Can teleport to a random player, leaving EMF 2 or EMF 5"],
                speed: "1.7m/s",
                sanity: "50%",
                evidence: ["EMF 5", "Spirit Box", "DOTS"],
            },
            // Add more ghosts here...
        };

        const selectedGhost = interaction.options.getString('name');

        const ghostEmbed = new EmbedBuilder()
            .setColor(0xffffff)
            .setTitle(ghosts[selectedGhost].name)
            .setDescription(ghosts[selectedGhost].tells.join('\n') + "\n***Speed: " + ghosts[selectedGhost].speed + "***\n" + "***Sanity: " + ghosts[selectedGhost].sanity + "***")
            .addFields(
                { name: ghosts[selectedGhost].evidence[0], value: '\u200B', inline: true },
		        { name: ghosts[selectedGhost].evidence[1], value: '\u200B', inline: true },
		        { name: ghosts[selectedGhost].evidence[2], value: '\u200B', inline: true },
            )

        await interaction.reply({embeds: [ghostEmbed], ephemeral: true});
	},
};