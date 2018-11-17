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
            searchId: false
        };

        this.setGoods = this.setGoods.bind(this);
        this.changeSort = this.changeSort.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.isSearchIdMatched = this.isSearchIdMatched.bind(this);
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
            searchValue: value
        });
    }

    isSearchIdMatched(value) {
        this.setState({
            searchId: value
        });
    }

    render() {
        const { goods, sortType, isReverseOff, searchValue, searchId } = this.state;
        return (
            <div className='App'>
                {
                    (!goods)?
                        <h1>Загрузка</h1>:
                        <div>
                            <Sort
                                changeSort={this.changeSort}
                                onChangeInput={this.onChangeInput}
                            />
                            <Table
                                goods={goods}
                                sortType={sortType}
                                isReverseOff={isReverseOff}
                                searchValue={searchValue}
                                isSearchIdMatched={this.isSearchIdMatched}
                                searchId={searchId}
                            />
                        </div>
                }
            </div>
        );
    }
}

export default App;
