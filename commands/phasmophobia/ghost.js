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
                    { name: 'Banshee', value: 'banshee' },
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

        const evidenceMapping = {
            1: "EMF 5",
            2: "DOTS",
            3: "Ultraviolet",
            4: "Ghost Orbs",
            5: "Ghost Writing",
            6: "Spirit Box",
            7: "Freezing Temperatures",
        };

        const ghosts = {
            spirit: {
                name: "Spirit",
                tells: ["Smudging the ghost will prevent a hunt for 180s instead of the normal 90s"],
                evidence: [1, 6, 5],
            },
            wraith: {
                name: "Wraith",
                tells: ["Won't step in salt", "Won't be slowed by tier 3 salt", "Can teleport to a random player, generating EMF 2 or EMF 5 (25%)"],
                evidence: [1, 6, 2],
            },
            phantom : {
                name: "Phantom",
                tells: ["Won't appear in ghost photo and the photo will not contain any interference.", "If the photo is taken during an event, the ghost will physically disappear without stopping the event", "Can randomly roam to a player, generating EMF 2", "Less visable during hunts"],
                evidence: [6, 3, 2],
            },
            poltergeist: {
                name: "Poltergeist",
                tells: ["Can throw multiple objects at once", "Can throw a single object farther", "Higher chance to throw objects"],
                evidence: [6, 3, 5],
            },
            banshee: {
                name: "Banshee",
                tells: ["Unique paramic scream", "Will only hunt its target, unless outside", "Performs melodic ghost events more often than other ghosts", "Roams to target player outside of hunts"],
                evidence: [3, 4, 2],
            },
            jinn: {
                name: "Jinn",
                tells: ["Can't turn off the breaker", "Has the ability to speed up to far away players if breaker is on", "When the Jinn uses its ability, it will lower the sanity of all players in the same room or otherwise within 3 meters of it by 25%. An EMF 2/5 reading will be generated at the fuse box."],
                speed: "1.7m/s or 2.5m/s",
                evidence: [1, 3, 7],
            },
            mare: {
                name: "Mare",
                tells: ["Ability to turn off a light immediately after a player turns one on", "Can hunt at 60% sanity in unlit rooms", "Turns off lights and breaks lightbulbs more often", "Prefers unlit rooms", "Can't turn lights off"],
                sanity: "50% or 60%",
                evidence: [6, 4, 5],
            },
            revenant: {
                name: "Revenant",
                tells: ["Significant speed increase when chasing a player during hunts", "Roaming speed remains low or drop over time when no player is detected"],
                speed: "1.0m/s or 3.0m/s",
                evidence: [4, 5, 7],
            },
            shade: {
                name: "Shade",
                tells: ["Harder to find due to it being generally less active", "Produces hissing and shadowy form ghost events more often", "At 100% average sanity, it has a 0% chance of successfully performing an event. This success rate increases by 2% per percentage of average sanity lost", "If at least one person is in the same room as a Shade, it will be unable to perform regular interactions (except Ghost Writing) or initiate a hunt"],
                sanity: "35%",
                evidence: [1, 5, 7],
            },
            demon: {
                name: "Demon",
                tells: ["Smudging the ghost will prevent a hunt for 60s instead of the normal 90s", "Has ability to hunt at any sanity", "Minimum cooldown of 20 seconds between hunts, instead of the usual 25 second", "The effective range of a crucifix is 50% larger than the standard range"],
                sanity: "70%",
                evidence: [3, 5, 7],
            },
            yurei: {
                name: "Yurei",
                tells: ["Smudging it will make it return to its favourite room and trap it therefor 60 seconds", "Quickly drains sanity", "If the ghost's current room has one or more open door, it will randomly select one and close it fully"],
                evidence: [4, 7, 2],
            },
            oni: {
                name: "Oni",
                tells: ["Can't do hissing event", "Model remains visible for longer periods when hunting", "Drains 20% sanity instead of 10% from events", "More active, especially when there are more people nearby"],
                evidence: [1, 7, 2],
            },
        };

        /**
         *   1: "EMF 5",
         *   2: "DOTS",
         *   3: "Ultraviolet",
         *   4: "Ghost Orbs",
         *   5: "Ghost Writing",
         *   6: "Spirit Box",
         *   7: "Freezing Temperatures",
         */

        const selectedGhost = interaction.options.getString('name');
        const formattedEvidence = ghosts[selectedGhost].evidence.map(evidenceId => evidenceMapping[evidenceId]);

        const ghostEmbed = new EmbedBuilder()
            .setColor(0xffffff)
            .setTitle(ghosts[selectedGhost].name)
            .setDescription(ghosts[selectedGhost].tells.join('\n') + "\n" + "\n***Speed: " + (ghosts[selectedGhost].speed ?? "1.7m/s") + "***\n" + "***Sanity: " + (ghosts[selectedGhost].sanity ?? "50%") + "***")
            .addFields(
                { name: formattedEvidence[0], value: '\u200B', inline: true },
		        { name: formattedEvidence[1], value: '\u200B', inline: true },
		        { name: formattedEvidence[2], value: '\u200B', inline: true },
            )

        await interaction.reply({embeds: [ghostEmbed], ephemeral: true});
	},
};