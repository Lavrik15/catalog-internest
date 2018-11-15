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
            sortType: 'none'
        };

        this.setGoods = this.setGoods.bind(this);
        this.changeSort = this.changeSort.bind(this);
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
            sortType: sortType
        });
    }

    render() {
        const { goods, sortType } = this.state;
        return (
            <div className='App'>
                {
                    (!goods)?
                        <h1>Загрузка</h1>:
                        <div>
                            <Sort
                                changeSort={this.changeSort}
                            />
                            <Table
                                goods={goods}
                                sortType={sortType}
                            />
                        </div>
                }
            </div>
        );
    }
}

export default App;
