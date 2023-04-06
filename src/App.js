import React from 'react';
import './App.css';
import { ANIMALS } from './animals.js';
import { useCookies } from "react-cookie";


function App() {
    const [cookies, setCookie] = useCookies(["user"]);

    function handleCookie(form) {
        setCookie("user", form, {
            path: "/"
        });
    }

    let startingForm = cookies.user ? cookies.user : "Half-Elf";

    return (
        <div className="App">
            <CharacterSheet form={startingForm} handleCookie={handleCookie}/>
        </div>
    );
}

class CharacterSheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 11,
            abilities: {
                STR: 11, DEX: 12, CON: 12, INT: 11, WIS: 19, CHA: 9
            },
            form: props.form,
            AC: 23, //10 + rhino armor + shield + ring of power + rainbow belt + 1(?)
            skillBonus: {}
        }
        this.changeState = this.changeState.bind(this);
    }

    changeState(animal) {
        const newAnimal = _findAnimal(animal);
        console.log('wild shaping to ' + newAnimal.name);
        const newAbilities = JSON.parse(JSON.stringify(this.state.abilities));
        newAbilities.STR = newAnimal.STR;
        newAbilities.DEX = newAnimal.DEX;
        newAbilities.CON = newAnimal.CON;

        this.setState({
            abilities: newAbilities,
            form: newAnimal.name,
            skillBonus: newAnimal.skills
        });

        this.props.handleCookie(newAnimal.name);
    }

    openDoc() {
        window.open('https://docs.google.com/document/d/1Nqd2e5jN7umJwu0_1pBcgzvONexMfg231x-4pcBv4pU/edit#heading=h.9rom2cpesa89');
    }

    render() {
        return (
            <div className="charSheet">
                <h1 onClick={this.openDoc}>Lia Amakiir</h1>
                <LiaHeader state={this.state} />
                <WildShape changeState={this.changeState} form={this.state.form} />
                <Abilities abilities={this.state.abilities} />
                <SavingThrows abilities={this.state.abilities} />
                <Attacks form={this.state.form} abilities={this.state.abilities} />
                <Skills abilities={this.state.abilities} bonus={this.state.skillBonus} />
            </div>
        );
    }
}

function LiaHeader(props) {
    let animal = _findAnimal(props.state.form);
    const DEX = _calcMod(props.state.abilities.DEX);
    let AC = 13 + animal.naturalArmor + DEX; //11 cuz of a misc mod + rainbow belt
    let ffAC = 13 + animal.naturalArmor;
    let touchAC = 11 + DEX;
    let CON = _calcMod(props.state.abilities.CON);    
    let otherSpeeds = '';
    if(animal.flySpeed) otherSpeeds += "; Fly: " + animal.flySpeed;
    if(animal.swimSpeed) otherSpeeds += "; Swim: " + animal.swimSpeed;
    if(animal.climbSpeed) otherSpeeds += "; Crawl: " + animal.climbSpeed;

    function openSheet() {        
        window.open('https://docs.google.com/spreadsheets/d/17tFSotVkqZibHmsRqxpLjVVpUEzBzfbAp5TxtKpov5M/edit#gid=0');
    }

    return (
        <table className="header">
            <thead><tr>
                <th colSpan='2'>
                    Lvl {props.state.level} 
                    <a href='https://www.d20srd.org/srd/classes/druid.htm'>
                        Druid
                    </a>
                </th>
            </tr></thead>
            <tbody>
                <tr>
                    <td>Size: {animal.size}</td>
                    <td>Space/Reach: {animal.spaceReach}</td>
                </tr> 
                <tr>
                    <td  onClick={openSheet}>
                        <span className='underlined'>
                            HP Max: {(6+8+4+4+8+4+3+6+4+6+5+4)+(CON*props.state.level)}
                        </span>
                    </td>                    
                    <td>AC: {AC} (T: {touchAC}, FF: {ffAC})</td>
                </tr>             
                <tr>
                    <td colSpan='2'>Speed: {animal.speed} {otherSpeeds}</td>
                </tr>
            </tbody>
        </table>
    )
}

class WildShape extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selected:props.form};
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.changeState(this.state.selected);
    }

    handleChange(event) {
        this.setState({selected: event.target.value});
        this.props.changeState(event.target.value);
    }

    render() {
        const animals = ANIMALS.map((animal) =>
            <option key={animal.name} value={animal.name}>{animal.name}</option>
        );
        const animal = _findAnimal(this.props.form);

        return (
            <div>
                <label>Wild Shape: </label> 
                <select 
                    defaultValue={this.props.form} 
                    onChange={this.handleChange}
                >{animals}
                </select>
                <a className='link' href={animal.link}>[ d20srd ]</a>
            </div>
        )
    }
}

function Abilities(props) {
    function renderTH() {
        let tr = [];
        for(let key in props.abilities) {
            tr.push(<th key={key}>{key}</th>);
        }
        return tr;
    }

    function renderCells() {
        let tr = [];
        for(let key in props.abilities) {
            let score = props.abilities[key];
            tr.push(<td key={key} className='abilities'>
                {score} 
                <div className='modifier'>{_calcMod(score)}</div>
            </td>);
        }
        return tr;
    }

    return (
        <table>
            <thead><tr>{renderTH()}</tr></thead>
            <tbody>
                <tr>{renderCells()}</tr>
            </tbody>
        </table>
    )
}

function SavingThrows(props) {
    let FORT = 7 + _calcMod(props.abilities.CON) + 2;
    let REF = 3 + _calcMod(props.abilities.DEX) + 2;
    let WILL = 9 + _calcMod(props.abilities.WIS) + 2;
    return (
        <table>
            <thead><tr>
                <th>FORT</th>
                <th>REF</th>
                <th>WILL</th>
            </tr></thead>
            <tbody><tr>
                <td>{FORT}</td>
                <td>{REF}</td>
                <td>{WILL}</td>
            </tr></tbody>
        </table>
    )
}

function Attacks(props) {
    const animal = _findAnimal(props.form);
    let special = animal.specialAttacks.map((v) => {
        let [name, desc] = v.split(":");
        return (<li key={name}><span className="specialName">{name}: </span>{desc}</li>);
    });
    let attackBonus = "(+8/+3)";
    let fullBonus = '';
    let STR = _calcMod(props.abilities.STR);
    let grapple = STR;
    if(props.form !== "Half-Elf") {
        let sizeMod = 0;
        switch(animal.size) {
            case 'small': 
                grapple += -4; 
                sizeMod = 1;
                break;
            case 'large': 
                grapple += 4; 
                sizeMod = -1;
                break;
            default: break; //medium is +0
        }
        let primary = 8 + STR + sizeMod;
        let secondary = primary - 5;
        fullBonus = attackBonus = "(+" + primary + "/+" + secondary + ")";
    }

    return (
        <div>
            <table className='attacks'>
                <tbody>
                    <tr><th>Attack: {attackBonus}:</th><td>{animal.attack}</td></tr>
                    <tr><th>Full: {fullBonus}</th><td>{animal.fullAttack}</td></tr>
                    <tr>
                        <th><a href='http://www.d20srd.org/srd/combat/specialAttacks.htm#grappleChecks'>
                            Special:
                        </a></th>
                        <td><ul>{special}</ul></td>
                    </tr>
                </tbody>
            </table>            
            <p>*Grapple = (+8/+3) + {grapple}</p>
        </div>
    )
}

function Skills(props) {
    let mods = {};
    for(let key in props.abilities) {
        mods[key] = _calcMod(props.abilities[key]);
    }
    let { STR, DEX, CON, INT, WIS, CHA } = mods;

    let skills1 = { //ranks, misc modifiers, ability, class skill
        concentration: [8, 0, CON, true],
        craft: [4, 0, INT, true],
        diplomacy: [0, 2, CHA, true],
        gatherInfo: [0, 2, CHA, false],
        handleAnimal: [6, 0, CHA, true],
        heal: [5, 0, WIS, true],
        knowledgeNature: [8, 7, INT, true],
        knowLocalGeography: [0, 10, INT, false],
        listen: [2, 1, WIS, false],
        professionSailing: [1, 0, WIS, true],
        ride: [0, 2, DEX, true],
        search: [6, 1, INT, false],
        spellcraft: [2, 0, INT, true],
        spot: [10, 1, WIS, true],
        survival: [5, 5, WIS, true],
        survivalInNature: [5, 7, WIS, true]
    }

    let skills2 = {
        appraise: [0, 0, INT, false],
        balance: [0, 0, DEX, false],
        bluff: [0, 0, CHA, false],
        climb: [0, 0, STR, false],
        disguise: [0, 0, CHA, false],
        escapeArtist: [0, 0, DEX, false],
        forgery: [0, 0, INT, false],
        hide: [0, 0, DEX, false],
        intimidate: [0, 0, CHA, false],
        jump: [0, 0, STR, false],
        moveSilently: [0, 0, DEX, false],
        openLock: [0, 0, DEX, false],
        senseMotive: [0, 0, WIS, false],
        sleightOfHand: [0, 0, DEX, false],
        swim: [0, 0, STR, true]
    }

    function insertRows(skills) {
        let rows = [];

        const r = 0;
        const m = 1;
        const a = 2;
        const c = 3;

        for(let skill in skills) {
            let rank = skills[skill][r];
            let misc = skills[skill][m];
            let mod = skills[skill][a];
            let modifier = rank + misc + mod;
            let animalSkill = '';
            if(props.bonus[skill]) {
                modifier += props.bonus[skill];
                animalSkill = 'animalSkill';
            }
            let classSkill = skills[skill][c] ? 'classSkill' : '';
            rows.push(
                <tr key={skill}>
                    <th className={classSkill}>{skill}</th>
                    <td className={animalSkill}>{modifier}</td>
                </tr>
            );
        }

        return rows;
    }

    return (
        <div>            
            <h2>Skills</h2>
            <div className='skills'>
                <table><tbody>
                    {insertRows(skills2)}
                </tbody></table>
                <table><tbody>
                    {insertRows(skills1)}
                </tbody></table>
            </div>            
        </div>
    )
}

// **** helpers **** //

function _calcMod(abilityScore) {
    return Math.floor((abilityScore-10)/2)
}

function _findAnimal(name) {
    const animal = ANIMALS.find((value) => {
        return value.name === name; 
    });
    return animal;
}

export default App;
