import React, {Component} from 'react';
import axios from 'axios';
import Sort from './components/Sort/Sort';
import Table from './components/Table/Table';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goods: null
        }

        this.setGoods = this.setGoods.bind(this);
    }

    componentDidMount() {
        this.fetchGoods();
    }

    fetchGoods() {
        axios({
            method: 'get',
            url: '/shop.json',
            timeout: 10000
        })
            .then(result => this.setGoods(result.data))
            .catch(error => this.setState({ error }))
    }

    setGoods(data) {
        this.setState(data);
    }

    render() {
        const { goods } = this.state;
        return (
            <div className='App'>
                {
                    (!goods)?
                        <h1>Загрузка</h1>:
                        <div>
                            <Sort/>
                            <Table goods={goods}/>
                        </div>
                }
            </div>
        );
    }
}

export default App;
