import React from 'react'
import { Input, Button, Form } from 'semantic-ui-react'
import "./Sort.css";

const Sort = ({changeSort, searchValue, onChangeInput, onMinChange, onMaxChange ,removeFilter, minCost, maxCost}) => {
    return(
        <div>
            <div className='Sort ui grid stackable '>
                <div className='row'>
                    <Input
                        placeholder='Поиск'
                        className='Sort__search four wide column'
                        value={searchValue}
                        onChange={(e) => onChangeInput(e)}
                    />
                    <div className='Sort__btn-group six wide column'>
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
                        <span
                            className='ui icon button'
                            role='button'
                            onClick={() => removeFilter()}
                        >убрать фильтры
                         <i className="cancel icon"/>
                    </span>
                    </div>
                    <div className='Sort__Range four wide column fields'>
                        <Form>
                            <Form.Group widths='equal'>
                                {/*<label>мин (руб.)</label>*/}
                                <Form.Input
                                    type='number'
                                    min='0'
                                    placeholder='мин. руб.)'
                                    label='мин. руб.'
                                    fluid
                                    value={minCost}
                                    onChange={(e) => onMinChange(e)}
                                />
                                <Form.Input
                                    type='number'
                                    min='0'
                                    placeholder='макс. руб.'
                                    label='макс. руб.'
                                    fluid
                                    value={maxCost}
                                    onChange={(e) => onMaxChange(e)}
                                />
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sort;