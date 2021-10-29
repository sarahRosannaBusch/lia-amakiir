/** @brief d&d 3.5e wild shape animals
 *  @author Sarah Rosanna Busch
 * size, speed, natural armor and weapons, special attacks, str, dex, con
 */

//  {
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
//     skills: {},
//     CR: 0
// }

const SA = {
    pounce: 'if it charges can make a full attack',
    improvedGrab: 'if it hits, can attempt a grapple',
    rake: 'attack bonus +18 (2d4+4)',
    constrict: 'on a successful grapple, squeeze (2d8+6)'
}

export const ANIMALS = [
    {
        name: 'Half-Elf',
        size: 'medium',
        speed: 30,
        STR: 11,
        DEX: 12,
        CON: 12,
        naturalArmor: 9, //actually from armor (5) and shield (4)
        attack: "club (1d6) || silver dagger (1d4) [crits on 19] || sling (1d4)",
        fullAttack: "+6/+1 base attack bonus",
        specialAttacks: 'rhino hide armor: charge attack damage bonus (2d6)',
        skills: {},
        CR: 100, //so it's always on top
        link: 'https://www.d20srd.org/srd/classes/druid.htm'
    }, {
        name: 'Eagle',
        size: 'small',
        speed: 10,
        flySpeed: 80,    
        STR: 10,
        DEX: 15,
        CON: 12,
        naturalArmor: 1,
        attack: "talons (1d4)",
        fullAttack: "2 talons (1d4), bite (1d4)",
        specialAttacks: '',
        skills: {spot:8},
        CR: 0.5
    }, {
        name: 'Megaraptor',
        size: 'large',
        speed: 60,   
        STR: 21,
        DEX: 15,
        CON: 21,
        naturalArmor: 6,
        attack: "talons (2d6+5)",
        fullAttack: "talons (2d6+5), 2 foreclaws (1d4+2), bite (1d8+2)",
        specialAttacks: [SA.pounce],
        skills: {hide:8, jump:8, listen:8, spot:8, survival:8},
        CR: 6,
        link: "http://www.d20srd.org/srd/monsters/dinosaur.htm#megaraptor"
    }, {
        name: 'Dire Bear',
        size: 'large',
        speed: 40,   
        STR: 31,
        DEX: 13,
        CON: 19,
        naturalArmor: 7,
        attack: "claw (2d4+10)",
        fullAttack: "2 claws (2d4+10), bite (2d8+5)",
        specialAttacks: [SA.improvedGrab],
        skills: {},
        CR: 7
    }, {
        name: 'Dire Tiger',
        size: 'large',
        speed: 40,   
        STR: 27,
        DEX: 15,
        CON: 17,
        naturalArmor: 6,
        attack: "claw (2d4+8)",
        fullAttack: "2 claws (2d4+8), bite (2d6+4)",
        specialAttacks: [SA.improvedGrab, SA.pounce, SA.rake],
        skills: {hide:4, moveSilently:4, hideInTallGrass:8},
        CR: 8
    }, {
        name: 'Giant Octopus',
        size: 'large',
        speed: 20, 
        swimSpeed: 30,  
        STR: 20,
        DEX: 15,
        CON: 13,
        naturalArmor: 7,
        attack: "tentacle (1d4+5)",
        fullAttack: "8 tentacles (1d4+5), bite (1d8+2)",
        specialAttacks: [SA.improvedGrab, SA.constrict],
        skills: {hide:4, escapeArtist:10, swim:8},
        CR: 8
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
        skills: {},
        CR: 0
    }
];