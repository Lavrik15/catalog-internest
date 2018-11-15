import React from 'react';
import { sortBy } from 'lodash';
import {Icon, Menu, Table} from 'semantic-ui-react'
import './Table.css';

const sortGoods = {
    none: list => list,
    title: list => sortBy(list, (o) => o.data.title),
    price: list => sortBy(list, (o) => o.data.price),
    discount: list => sortBy(list, (o) => o.data.discount)
};

const TableContent = ({goods, sortType}) => {
    const sortedGoods = sortGoods[sortType](goods);
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
                {sortedGoods.map((item) => {
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
                })}

            </Table.Body>

            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='5'>
                        <Menu floated='right' pagination>
                            <Menu.Item as='a' icon>
                                <Icon name='chevron left'/>
                            </Menu.Item>
                            <Menu.Item as='a'>1</Menu.Item>
                            <Menu.Item as='a'>2</Menu.Item>
                            <Menu.Item as='a'>3</Menu.Item>
                            <Menu.Item as='a'>4</Menu.Item>
                            <Menu.Item as='a' icon>
                                <Icon name='chevron right'/>
                            </Menu.Item>
                        </Menu>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    );
}


export default TableContent;
