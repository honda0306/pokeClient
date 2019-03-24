import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <h2 className='title'>Pokemon</h2>
            <div className='link'>
                <Link to='/' className='buttonLink'>
                    <button block='true' className='buttons'>List</button>
                </Link>
            </div>
            {/* <div className='link'>
                
            </div> */}
        </div>
    )
}

export default NavBar;