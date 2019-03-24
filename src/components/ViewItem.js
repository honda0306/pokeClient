import React from 'react';

const ViewItem = (props) => {
    return (
        <div>
            <h3 className='header'>{props.selected.name}</h3>
        </div>
    )
}

export default ViewItem;