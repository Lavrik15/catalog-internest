import React, {Component} from 'react';
import axios from 'axios';
import Sort from './components/Sort/Sort';
import Table from './components/Table/Table';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goods: null,
            sortType: "none",
            isReverseOff: true,
            searchValue: "",
            searchId: false,
            itemsOnPage: 5,
            defaultItemsOnPage: 5,
            minCost: 0,
            maxCost: 0
        };

        this.setGoods = this.setGoods.bind(this);
        this.changeSort = this.changeSort.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.isSearchIdMatched = this.isSearchIdMatched.bind(this);
        this.showMoreItems = this.showMoreItems.bind(this);
        this.onMinChange = this.onMinChange.bind(this);
        this.onMaxChange = this.onMaxChange.bind(this);
        this.removeFilter = this.removeFilter.bind(this);
    }

    componentDidMount() {
        this.fetchGoods();

        window.addEventListener(
            "beforeunload",
            this.saveStateToLocalStorage.bind(this)
        );
    }

    componentWillUnmount() {
        window.removeEventListener(
            "beforeunload",
            this.saveStateToLocalStorage.bind(this)
        );

        this.saveStateToLocalStorage();
    }

    fetchGoods() {

        const cached = JSON.parse(localStorage.getItem('goods'));
        if (cached) {
            this.hydrateStateWithLocalStorage();
            return;
        }

        axios({
            method: 'get',
            url: './shop.json',
            timeout: 10000
        })
            .then(result => this.setGoods(result.data))
            .catch(error => this.setState({ error }))
    }

    setGoods(data) {
        this.setState(data);
    }

    saveStateToLocalStorage() {
        // for every item in React state
        for (let key in this.state) {
            // save to localStorage
            localStorage.setItem(key, JSON.stringify(this.state[key]));
        }
    }

    hydrateStateWithLocalStorage() {
        // for all items in state
        for (let key in this.state) {
            // if the key exists in localStorage
            if (localStorage.hasOwnProperty(key)) {
                // get the key's value from localStorage
                let value = localStorage.getItem(key);

                // parse the localStorage string and setState
                try {
                    value = JSON.parse(value);
                    this.setState({ [key]: value });
                } catch (e) {
                    // handle empty string
                    this.setState({ [key]: value });
                }
            }
        }
    }

    changeSort(sortType) {
        this.setState({
            sortType,
            isReverseOff: !this.state.isReverseOff
        });
    }

    onChangeInput( {target: { value }} ) {
        this.setState({
            searchValue: value,
            itemsOnPage: this.state.defaultItemsOnPage
        });
    }

    isSearchIdMatched(value) {
        this.setState({
            searchId: value,
            itemsOnPage: this.state.defaultItemsOnPage
        });
    }

    showMoreItems() {
        const { itemsOnPage } = this.state;
        this.setState({
            itemsOnPage: itemsOnPage + itemsOnPage
        });
    }

    onMinChange({target: { value }}) {
        this.setState({
            minCost: value,
            itemsOnPage: this.state.defaultItemsOnPage
        });
    }

    onMaxChange({target: { value }}) {
        const max = value === '' ? Infinity : value;
        this.setState({
            maxCost: max,
            itemsOnPage: this.state.defaultItemsOnPage
        });
    }

    removeFilter() {
        this.setState({
            sortType: "none",
            isReverseOff: true,
            searchValue: "",
            searchId: false,
            itemsOnPage: 5,
            defaultItemsOnPage: 5,
            minCost: 0,
            maxCost: 0
        });
    }

    render() {
        const { goods, sortType, isReverseOff, searchValue, searchId, itemsOnPage, minCost, maxCost } = this.state;
        return (
            <div className='App'>
                {
                    (!goods)?
                        <h1>Загрузка</h1>:
                        <div>
                            <Sort
                                changeSort={this.changeSort}
                                onChangeInput={this.onChangeInput}
                                onMinChange={this.onMinChange}
                                onMaxChange={this.onMaxChange}
                                removeFilter={this.removeFilter}
                                searchValue={searchValue}
                                minCost={minCost}
                                maxCost={maxCost}
                            />
                            <Table
                                goods={goods}
                                sortType={sortType}
                                isReverseOff={isReverseOff}
                                searchValue={searchValue}
                                isSearchIdMatched={this.isSearchIdMatched}
                                searchId={searchId}
                                itemsOnPage={itemsOnPage}
                                showMoreItems={this.showMoreItems}
                                minCost={minCost}
                                maxCost={maxCost}
                            />
                        </div>
                }
            </div>
        );
    }
}

export default App;
