const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const spiritEmbed = new EmbedBuilder()
    .setColor(0xffffff)
    .setTitle('Spirit')
    .setDescription('A Spirit can be temporarily stopped by burning Incense near them.')
    .addFields(
        { name: 'EMF', value: '\u200B', inline: true },
		{ name: 'Spirit Box', value: '\u200B', inline: true },
		{ name: 'Ghost Writing', value: '\u200B', inline: true },
    )

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
		//await interaction.reply('Pong!');
        //console.log(interaction.options.get('name').value);
        switch(interaction.options.get('name').value) {
            case 'spirit':
              await interaction.reply({embeds: [spiritEmbed]});
              break;
            case y:
              // code block
              break;
          }
	},
};