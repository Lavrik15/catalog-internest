import React, {Component} from 'react'
import { Input, Button } from 'semantic-ui-react'
import "./Sort.css";

class Sort extends Component {
    render() {
        return (
            <div className='Sort'>
                <Input action={{ icon: 'search' }} placeholder='Search...' className='Sort__search'/>
                <Button className='ui icon button' role='button'>
                    <i className="sort alphabet down icon"/>
                </Button>
                <Button className='ui icon button' role='button'>
                    <i className="dollar sign icon"/>
                </Button>
                <button className='ui icon button' role='button'>
                    <i className="percent icon"/>
                </button>
                <div className='Sort__Range'>
                    <Input type='number' min='0' placeholder='мин (руб.)' />
                    <Input type='number' min='0' placeholder='макс (руб.)' />
                </div>
            </div>
        );
    }
}

export default Sort;