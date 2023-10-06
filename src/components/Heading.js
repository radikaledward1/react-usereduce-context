import React from 'react';
import { Link } from 'react-router-dom';

const Heading = () => {
    return (
        <div>
            <div className='heading'>
                <Link to='/'>
                    <h3 className='title'>Tasks</h3>
                </Link>
                <Link to='/add'>
                    <button className='btnAdd'>+ Agregar</button>
                </Link>
            </div>
        </div>
    );
}

export default Heading;