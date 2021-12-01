/** @brief d&d 3.5e wild shape animals
 *  @author Sarah Rosanna Busch
 *  @date 30 Nov 2021
 */

// {
//     name: '',
//     size: '',
//     speed: 0,
//     flySpeed: 0,    
//     STR: 0,
//     DEX: 0,
//     CON: 0,
//     naturalArmor: 0,
//     attack: "",
//     fullAttack: "",
//     specialAttacks: '',
//     spaceReach: '5ft/5ft',
//     skills: {},
//     CR: 0,
//     link: ''
// }

const SA = {
    pounce: 'pounce: if it charges can make a full attack',
    improvedGrab: 'improved grab: if it hits, can grapple w/o provoking AoO',
    rake: 'rake: 2 claw attacks while grappling (2d4+4)',
    constrict: 'constrict: on a successful grapple, squeeze (2d8+6)'
}

export const ANIMALS = [
    {
        name: 'Half-Elf',
        size: 'medium',
        speed: 20,
        STR: 11,
        DEX: 12,
        CON: 12,
        naturalArmor: 9, //actually from armor (5) and shield (4)
        attack: "club (1d6) | silver dagger (1d4) [crits on 19] | sling (1d4)",
        fullAttack: "charge: 2x speed, +2 melee, -2 AC, +2 bull rush",
        specialAttacks: ['rhino hide armor: charge attack damage bonus (2d6)'],
        spaceReach: '5ft/5ft',
        skills: {},
        CR: 100, //so it's always on top
        link: 'https://www.d20srd.org/srd/races.htm#halfElves'
    }, {
        name: 'Eagle',
        size: 'small',
        speed: 10,
        flySpeed: 80,    
        STR: 10,
        DEX: 15,
        CON: 12,
        naturalArmor: 1+1, //plus size mod
        attack: "talons (1d4)",
        fullAttack: "2 talons (1d4), bite (1d4)",
        specialAttacks: [],
        spaceReach: '5ft/5ft',
        skills: {spot:8},
        CR: 0.5,
        link: 'http://www.d20srd.org/srd/monsters/eagle.htm'
    }, {
        name: 'Megaraptor',
        size: 'large',
        speed: 60,   
        STR: 21,
        DEX: 15,
        CON: 21,
        naturalArmor: 6-1,
        attack: "talons (2d6+5)",
        fullAttack: "talons (2d6+5), 2 foreclaws (1d4+2), bite (1d8+2)",
        specialAttacks: [SA.pounce],
        spaceReach: '10ft/5ft',
        skills: {hide:8, jump:8, listen:8, spot:8, survival:8, survivalInNature:8},
        CR: 6,
        link: "http://www.d20srd.org/srd/monsters/dinosaur.htm#megaraptor"
    }, {
        name: 'Dire Bear',
        size: 'large',
        speed: 40,   
        STR: 31,
        DEX: 13,
        CON: 19,
        naturalArmor: 7-1,
        attack: "claw (2d4+10)",
        fullAttack: "2 claws (2d4+10), bite (2d8+5)",
        specialAttacks: [SA.improvedGrab],
        spaceReach: '10ft/5ft',
        skills: {},
        CR: 7,
        link: 'http://www.d20srd.org/srd/monsters/direBear.htm'
    }, {
        name: 'Dire Tiger',
        size: 'large',
        speed: 40,   
        STR: 27,
        DEX: 15,
        CON: 17,
        naturalArmor: 6-1,
        attack: "claw (2d4+8)",
        fullAttack: "2 claws (2d4+8), bite (2d6+4)",
        specialAttacks: [SA.pounce, SA.improvedGrab, SA.rake],
        spaceReach: '10ft/5ft',
        skills: {hide:4, moveSilently:4, hideInTallGrass:8},
        CR: 8,
        link: 'http://www.d20srd.org/srd/monsters/direTiger.htm'
    }, {
        name: 'Giant Octopus',
        size: 'large',
        speed: 20, 
        swimSpeed: 30,  
        STR: 20,
        DEX: 15,
        CON: 13,
        naturalArmor: 7-1,
        attack: "tentacle (1d4+5)",
        fullAttack: "8 tentacles (1d4+5), bite (1d8+2)",
        specialAttacks: [SA.improvedGrab, SA.constrict],
        spaceReach: '10ft/10ft (20ft w/ tentacles)',
        skills: {hide:4, escapeArtist:10, swim:8},
        CR: 8,
        link: 'http://www.d20srd.org/srd/monsters/octopusGiant.htm'
    }, {
        name: '',
        size: '',
        speed: 0,
        flySpeed: 0,    
        STR: 0,
        DEX: 0,
        CON: 0,
        naturalArmor: 0,
        attack: "",
        fullAttack: "",
        specialAttacks: '',
        spaceReach: '5ft/5ft',
        skills: {},
        CR: 0,
        link: ''
    }
];