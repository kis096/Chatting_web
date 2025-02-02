// Components/Home.js
import React from 'react';

import Herosection from './Herosection';
import Services from './Services';
import Truested from './Truested';
import FetureProduct from './FetureProduct';


const Home = () => {
  const data ={
    name: "Radhe radhe"
  }
  return <>
   <Herosection myData={data}/>;
   <FetureProduct/>
  <Services/>
  <Truested/>

  </>
 
};



export default Home;
