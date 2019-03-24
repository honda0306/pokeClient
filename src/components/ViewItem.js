import React from 'react';

const ViewItem = (props) => {
    return (
        <div>
            <h3 className='header'>{props.selected.name}</h3>
            <h3 className='url'>{props.selected.url}</h3>
        </div>
    )
}

export default ViewItem;