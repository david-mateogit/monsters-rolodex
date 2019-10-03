import React, { Component } from 'react';
import CardList from './components/card-list/CardList';
import SearchBox from './components/searchbox/SearchBox';
import Alert from './components/alert/Alert';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monsters: [],
            alert: false,
            searchField: '',
        };
    }

    async componentDidMount() {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const monsters = await res.json();
        this.setState({ monsters });
    }

    searchMonsters = searchField => {
        const filteredMonsters = this.state.monsters.filter(m => {
            return m.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return filteredMonsters;
    };

    alert = () => {
        const monsterLength = this.searchMonsters(this.state.searchField).length;
        if (monsterLength) {
            this.setState({ alert: false });
        } else {
            this.setState({ alert: true });
        }
    };

    handleChange = e => {
        this.setState(
            {
                searchField: e.target.value,
            },
            () => {
                this.searchMonsters(this.state.searchField);
                this.alert();
            }
        );
    };

    render() {
        const { alert, searchField } = this.state;
        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                {alert && <Alert />}
                <SearchBox handleChange={this.handleChange} searchField={searchField} />
                <CardList monsters={this.searchMonsters(searchField)} />
            </div>
        );
    }
}

export default App;
