import React from 'react';
import './App.css';
import { ANIMALS } from './animals.js';

function App() {
  return (
    <div className="App">
        <CharacterSheet />
    </div>
  );
}

class CharacterSheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 8,
            abilities: {
                STR: 11, DEX: 12, CON: 12, INT: 11, WIS: 16, CHA: 9
            },
            form: "Half-Elf",
            AC: 21,
            skillBonus: {}
        }
        this.changeState = this.changeState.bind(this);
    }

    changeState(animal) {
        const newAnimal = ANIMALS.find((value) => {
            return value.name === animal; 
        });
        const newAbilities = JSON.parse(JSON.stringify(this.state.abilities));
        newAbilities.STR = newAnimal.STR;
        newAbilities.DEX = newAnimal.DEX;
        newAbilities.CON = newAnimal.CON;

        this.setState({
            abilities: newAbilities,
            form: animal,
            skillBonus: newAnimal.skills
        });
    }

    render() {
        return (
            <div className="charSheet">
                <LiaHeader state={this.state} />
                <WildShape changeState={this.changeState} form={this.state.form} />
                <Abilities abilities={this.state.abilities} />
                <SavingThrows abilities={this.state.abilities} />
                <Attacks form={this.state.form} />
                <Skills abilities={this.state.abilities} bonus={this.state.skillBonus} />
            </div>
        );
    }
}

function Attacks(props) {
    const animal = ANIMALS.find((value) => {
        return value.name === props.form; 
    });

    return (
        <ul className='attacks'>
            <li>{animal.attack} </li>
            <li>{animal.fullAttack} </li>
            <li>{animal.specialAttacks} </li>
        </ul>
    )
}

class WildShape extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogOpen: false
        }
        this.showDialog = this.showDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
    }

    showDialog() {
        this.setState({
            dialogOpen: true
        });
    }

    closeDialog(animal) {
        this.setState({
            dialogOpen: false
        });
        this.props.changeState(animal);
    }

    render() {
        const animal = ANIMALS.find((value) => {
            return value.name === this.props.form; 
        });
        return (
            <div>
                <label>Wild Shape: </label>
                <button onClick={this.showDialog}>{this.props.form}</button>
                <a href={animal.link} target='_blank'>[ link ]</a>
                <Dialog 
                    isOpen={this.state.dialogOpen} 
                    callback={this.closeDialog}
                    curForm={this.props.form}
                />
            </div>
        )
    }
}

class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: [],
            selected: "Half-Elf"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.applyFilter = this.applyFilter.bind(this);
    }

    handleChange(event) {
        this.setState({selected: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    applyFilter(type) {
        let curFilters = this.state.filter.slice();
        if(curFilters.includes(type)) {
            let i = curFilters.indexOf(type);
            curFilters.splice(i, 1); //remove from array
        } else {
            curFilters.push(type);
        }
        this.setState({filter: curFilters});
    }

    getFilteredList() {
        let filters = this.state.filter.slice();
        let animals = ANIMALS.sort(function(a, b){return b.CR - a.CR});

        if(filters.length === 0) {
            return animals;
        }

        animals = animals.filter((value) => {
            let include = false;
            if(filters.includes('Small') && value.size === 'small') {
                include = true;
            } else if(filters.includes('Medium') && value.size === 'medium') {
                include = true;
            } else if(filters.includes('Large') && value.size === 'large') {
                include = true;
            }
            return include && value;
        });

        animals = animals.filter((value) => {
            let include = false;
            if(!filters.includes('Flying') && !filters.includes('Swimming')) {
                include = true;
            } if(filters.includes('Flying') && value.flySpeed) {
                include = true;
            } else if(filters.includes('Swimming') && value.swimSpeed) {
                include = true;
            }
            return include && value;
        })

        return animals;
    }

    render() {
        if(!this.props.isOpen) {
            return null;
        }

        let filteredList = this.getFilteredList();

        const animals = filteredList.map((animal) =>
            <option key={animal.name} value={animal.name}>{animal.name}</option>
        );

        const selectedAnimal = ANIMALS.find((value) => {
            return value.name === this.state.selected; 
        });

        return (
            <div className="dialog">
                <div className="innerDialog">
                    <h1>Wild Shape</h1>
                    <div className="filters">
                        <FilterButton click={this.applyFilter}>Small</FilterButton>
                        <FilterButton click={this.applyFilter}>Medium</FilterButton>
                        <FilterButton click={this.applyFilter}>Large</FilterButton><br/>
                        <FilterButton click={this.applyFilter}>Fly</FilterButton>
                        <FilterButton click={this.applyFilter}>Swim</FilterButton>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <label>Pick an animal: </label>
                        <select 
                            value={this.state.selected ? this.state.selected : this.props.curForm} 
                            onChange={this.handleChange}
                        >{animals}
                        </select>
                    </form>
                    <div>
                        <pre>{JSON.stringify(selectedAnimal, null, "\r")}</pre>
                    </div>
                    <button onClick={() => this.props.callback(this.state.selected)}>Change Shape</button>
                </div>
            </div>
        )
    }
}

class FilterButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: false }
        this.toggleBtn = this.toggleBtn.bind(this);
    }

    toggleBtn() {
        let state = !this.state.selected;
        this.setState({selected: state});
        this.props.click(this.props.children);
    }

    render() {
        let className = this.state.selected ? "" : "unselected";
        return (
            <button 
                onClick={this.toggleBtn} 
                className={className}
            >{this.props.children}</button>
        );
    }
}

function Skills(props) {
    let mods = {};
    for(let key in props.abilities) {
        mods[key] = _calcMod(props.abilities[key]);
    }
    let { STR, DEX, CON, INT, WIS, CHA } = mods;

    let skills1 = { //ranks, misc modifiers, ability, class skill
        concentration: [6, 0, CON, true],
        craft: [0, 0, INT, true],
        diplomacy: [0, 2, CHA, true],
        gatherInfo: [0, 2, CHA, false],
        handleAnimal: [6, 0, CHA, true],
        heal: [5, 0, WIS, true],
        knowledgeNature: [8, 7, INT, true],
        listen: [2, 1, WIS, false],
        professionSailing: [1, 0, WIS, true],
        ride: [0, 2, DEX, true],
        search: [0, 1, INT, false],
        spellcraft: [2, 0, INT, true],
        spot: [8, 1, WIS, true],
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
        //const c = 3;

        for(let skill in skills) {
            let rank = skills[skill][r];
            let misc = skills[skill][m];
            let mod = skills[skill][a];
            let modifier = rank + misc + mod;
            if(props.bonus[skill]) {
                modifier += props.bonus[skill];
            }
            rows.push(<tr key={skill}><th>{skill}</th><td>{modifier}</td></tr>)
        }

        return rows;
    }

    return (
        <div className='skills'>
            <table><tbody>
                {insertRows(skills2)}
            </tbody></table>
            <table><tbody>
                {insertRows(skills1)}
            </tbody></table>
        </div>
    )
}

function SavingThrows(props) {
    let FORT = 6 + _calcMod(props.abilities.CON) + 1;
    let REF = 2 + _calcMod(props.abilities.DEX) + 1;
    let WILL = 6 + _calcMod(props.abilities.WIS) + 1;
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

function _calcMod(abilityScore) {
    return Math.floor((abilityScore-10)/2)
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

function LiaHeader(props) {
    let animal = ANIMALS.find((v) => v.name === props.state.form);
    let AC = 11 + animal.naturalArmor + _calcMod(props.state.abilities.DEX); //11 cuz of a misc mod
    return (
        <table className="header">
            <thead><tr><th colSpan='3'>Lia Amakiir - Lvl {props.state.level} Druid</th></tr></thead>
            <tbody>
                <tr><td>Speed: {animal.speed}</td><td>AC: {AC}</td><td>Size: {animal.size}</td></tr>
                <tr><td colSpan='3'>Base Attack: +6/+1</td></tr>
            </tbody>
        </table>
    )
}

export default App;
