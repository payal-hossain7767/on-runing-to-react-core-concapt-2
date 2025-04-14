import React from 'react';

const Link = ({navData}) => {
    return (
        <div>
            <li className='mr-10 px-4 py-2  rounded-2xl hover:bg-cyan-600'>
                <a href={navData.path}>{navData.name}</a>
            </li>
        </div>
    );
};

export default Link;