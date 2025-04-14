import React from 'react';

const Features = ({ feature }) => {
    return (
        <ul className="mt-2  flex flex-col gap-2 text-xs">
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-5 border-2 rounded-full me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>{feature}</span>
            </li>
        </ul>
    );
};

export default Features;