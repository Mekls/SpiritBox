const ghosts = {
    spirit: {
        name: "Spirit",
        tells: ["Smudging the ghost will prevent a hunt for 180s instead of the normal 90s"],
        evidence: [1, 2, 3],
    },
    wraith: {
        name: "Wraith",
        tells: ["Won't step in salt", "Won't be slowed by tier 3 salt", "Can teleport to a random player, generating EMF 2 or EMF 5 (25%)"],
        evidence: ["EMF 5", "Spirit Box", "DOTS"],
    },
    phantom : {
        name: "Phantom",
        tells: ["Won't appear in ghost photo and the photo will not contain any interference.", "If the photo is taken during an event, the ghost will physically disappear without stopping the event", "Can randomly roam to a player, generating EMF 2", "Less visable during hunts"],
        evidence: ["Spirit Box", "Ultraviolet", "DOTS"],
    },
    poltergeist: {
        name: "Poltergeist",
        tells: ["Can throw multiple objects at once", "Can throw a single object farther", "Higher chance to throw objects"],
        evidence: ["Spirit Box", "Ultraviolet", "Ghost Writing"],
    },
    banshee: {
        name: "Banshee",
        tells: ["Unique paramic scream", "Will only hunt it's target, unless outside", "Performs melodic ghost events more often than other ghosts", "roams to target player outside of hunts"],
        
    }
};

const selectedGhost = "spirit";

const evidenceMapping = {
    1: "EMF 5",
    2: "DOTS",
    3: "Ultraviolet",
    4: "Ghost Orb",
    5: "Ghost Writing",
    6: "Spirit Box",
    7: "Freezing Temperatures",
};

const formattedEvidence = ghosts[selectedGhost].evidence.map(evidenceId => evidenceMapping[evidenceId]);
console.log(formattedEvidence[1])