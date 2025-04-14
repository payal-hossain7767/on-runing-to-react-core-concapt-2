import React, { use } from 'react';
import Price from '../price/Price';

const Prices = ({pricesPromices}) => {

    const pricesData=use(pricesPromices)
    
    return (
        <div>
            <section className='grid md:grid-cols-2 w-100% mx-12 lg:grid-cols-3 '>
              
                {
                pricesData.map(pricesDataLink=><Price key={pricesDataLink.id} pricesDataLink={pricesDataLink}></Price>)
            }
            </section>
           
        </div>
    );
};

export default Prices;