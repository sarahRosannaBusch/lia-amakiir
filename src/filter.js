// *************************************** filter dialog **************************************** //
// first pass (deprecated, for reference only)
// TODO: filter options in Wild Shape selector


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
        const animal = _findAnimal(this.props.form);
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

        const selectedAnimal = _findAnimal(this.state.selected);

        return (
            <div className="dialog">
                <div className="innerDialog">
                    <h1>Wild Shape</h1>
                    <div className="filters" hidden>
                        <FilterButton click={this.applyFilter}>Small</FilterButton>
                        <FilterButton click={this.applyFilter}>Medium</FilterButton>
                        <FilterButton click={this.applyFilter}>Large</FilterButton><br/>
                        <FilterButton click={this.applyFilter}>Fly</FilterButton>
                        <FilterButton click={this.applyFilter}>Swim</FilterButton>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <select 
                            value={this.state.selected ? this.state.selected : this.props.curForm} 
                            onChange={this.handleChange}
                        >{animals}
                        </select>
                    </form>
                    <div>
                        <pre>{JSON.stringify(selectedAnimal, null, "\r")}</pre>
                    </div>
                    <div className="bottomButton">
                        <button onClick={() => this.props.callback(this.state.selected)}>
                            Change Shape
                        </button>
                    </div>
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