import React from 'react';


export default function Row(props) {
    return (
        <tr>
            <td>{props.item.name}</td>
            <td>{props.item.price}</td>
            <td>{props.item.amount}</td>
		</tr>
    )
}
