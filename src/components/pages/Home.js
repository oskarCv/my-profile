import React from 'react';
import {InfoConsumer} from '../Context';
import Info from '../Info';

function Home(){
    return (
        <div className="container">
            <div className="row mt-5">
              
              <InfoConsumer>
                {value => {
                  return value.info.map(item => {
                    return <Info key={item.id} item={item} className="mx-auto" />;
                  });
                }}
              </InfoConsumer>
              </div>
            </div>
        );
}
export default Home;
