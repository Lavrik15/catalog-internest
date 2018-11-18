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
            maxCost: Infinity
        };

        this.setGoods = this.setGoods.bind(this);
        this.changeSort = this.changeSort.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.isSearchIdMatched = this.isSearchIdMatched.bind(this);
        this.showMoreItems = this.showMoreItems.bind(this);
        this.onMinChange = this.onMinChange.bind(this);
        this.onMaxChange = this.onMaxChange.bind(this);
    }

    componentDidMount() {
        this.fetchGoods();
    }

    fetchGoods() {
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
            minCost: value
        });
    }

    onMaxChange({target: { value }}) {
        this.setState({
            maxCost: value
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
