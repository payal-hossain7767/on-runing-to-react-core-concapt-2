import React from 'react';

const Link = ({navData}) => {
    return (
        <div>
            <li className='mr-10 '>
                <a href={navData.path}>{navData.name}</a>
            </li>
        </div>
    );
};

export default Link;