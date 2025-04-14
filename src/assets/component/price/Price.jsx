import React from 'react';
import Features from '../Features/Features';

const Price = ({ pricesDataLink }) => {
    const { features, name, price, renewalPrice, shopName } = pricesDataLink
    return (
        <div>
            <section>
                <div className="card m-4 border-cyan-400 border-2 my-2 shadow-2xl">
                    <div className="card-body">
                        <span className="badge badge-xs badge-accent">Most Popular</span>
                        <div className="flex justify-between">
                            <h2 className="text-3xl font-bold">{name}</h2>

                        </div>
                        <span className="text-2xl font-extrabold my-4 text-cyan-500 p-4">{price}</span>

                      <div className='bg-[#B5FCCD] text-black'>
                      {
                            features.map((feature, index) => <Features key={index} feature={feature}></Features>)
                        }
                      </div>
                        <span className="text-xl my-4 border-2 border-cyan-500 rounded-2xl bg-cyan-500 p-4">{renewalPrice}</span>
                        <div className="mt-6">
                            <button className="btn btn-accent btn-block">{shopName}</button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Price;