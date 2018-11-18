import React from 'react'
import { Input, Button } from 'semantic-ui-react'
import "./Sort.css";

const Sort = ({changeSort, onChangeInput, onMinChange, onMaxChange}) => {
    return(
        <div className='Sort'>
            <Input
                   placeholder='Поиск'
                   className='Sort__search'
                   onChange={(e) => onChangeInput(e)}
            />
            <div className='Sort__btn-group'>
                <Button
                    className='ui icon button'
                    role='button'
                    onClick={() => changeSort("title")}
                >
                    <i className="sort alphabet down icon"/>
                </Button>
                <Button
                    className='ui icon button'
                    role='button'
                    onClick={() => changeSort("price")}
                >
                    <i className="dollar sign icon"/>
                </Button>
                <button
                    className='ui icon button'
                    role='button'
                    onClick={() => changeSort("discount")}
                >
                    <i className="percent icon"/>
                </button>
            </div>
            <div className='Sort__Range'>
                <Input
                    type='number'
                    min='0'
                    placeholder='мин (руб.)'
                    onChange={(e) => onMinChange(e)}
                />
                <Input
                    type='number'
                    min='0'
                    placeholder='макс (руб.)'
                    onChange={(e) => onMaxChange(e)}
                />
            </div>
        </div>
    );
}

export default Sort;