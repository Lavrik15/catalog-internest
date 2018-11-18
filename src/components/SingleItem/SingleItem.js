import React from 'react';
import { Table } from 'semantic-ui-react';

const SingleItem = (item) => {
    const { data } = item;
    let [single] = data;
    return (
        (single) ?
            <Table.Row key={single.data.id}>
                <Table.Cell>{single.data.id}</Table.Cell>
                <Table.Cell>{single.data.title}</Table.Cell>
                <Table.Cell>
                    <img className='Table__Single'
                         src={single.data.base_url}
                         alt=''/>
                </Table.Cell>
                <Table.Cell>{single.data.price}</Table.Cell>
                <Table.Cell>{single.data.discount}%</Table.Cell>
            </Table.Row> :
            null
    )
};

export default SingleItem;