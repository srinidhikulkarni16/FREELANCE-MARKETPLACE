import React from 'react';
import "./Home.css";
import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';

const Home=()=>{
  return(
    <div className='Home'>
      <Featured/>
      {/* <TrustedBy/> */}
    </div>
  )
}

export default Home;