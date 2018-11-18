import React from 'react';
import { sortBy } from 'lodash';
import {Table, Button} from 'semantic-ui-react';
import './Table.css';
import SingleItem from "../SingleItem/SingleItem";

const sortGoods = {
    none: list => list,
    title: list => sortBy(list, (o) => o.data.title),
    price: list => sortBy(list, (o) => o.data.price),
    discount: list => sortBy(list, (o) => o.data.discount)
};

const TableContent = ({goods, sortType, isReverseOff, searchValue, isSearchIdMatched, searchId, itemsOnPage, showMoreItems}) => {
    let isSingle = false;
    const searchString = searchValue.toLowerCase().trim();

    const sortedGoods = isReverseOff && sortType !== 'discount'?
        sortGoods[sortType](goods) :
        sortGoods[sortType](goods).reverse();

    const filteredGoods = sortedGoods.filter((item) => {
        const {data: {title, id}} = item;
        if (id === searchString) isSingle = true;
        return title.toLowerCase().includes(searchString) || id === searchString;
    });

    return (
        <Table className='Table' celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>id</Table.HeaderCell>
                    <Table.HeaderCell>title</Table.HeaderCell>
                    <Table.HeaderCell>image</Table.HeaderCell>
                    <Table.HeaderCell>price</Table.HeaderCell>
                    <Table.HeaderCell>sale</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {
                    (isSingle) ?
                        <SingleItem data={filteredGoods}/> :
                        filteredGoods.slice(0, itemsOnPage).map((item) => {
                            const {data} = item;
                            return (
                                <Table.Row key={data.id}>
                                    <Table.Cell>{data.id}</Table.Cell>
                                    <Table.Cell>{data.title}</Table.Cell>
                                    <Table.Cell>
                                        <img className='Table__image'
                                             src={data.base_url}
                                             alt=''/>
                                    </Table.Cell>
                                    <Table.Cell>{data.price}</Table.Cell>
                                    <Table.Cell>{data.discount}%</Table.Cell>
                                </Table.Row>
                            );
                        })
                }
            </Table.Body>

            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='5'>
                        <Button onClick={() => showMoreItems()}>показать еще</Button>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    );
}


export default TableContent;
