import React, { useEffect, useState } from "react";
import Specialdishes from "../Specialdishes/Specialdishes.jsx";
import Hero from "../Hero/Hero.jsx";
import Favouritedishes from "../Favourite/Favouritedishes.jsx";

import Loader from "../Loading/Loader.jsx";

const Menu = () => {
  const [loading, setLoading] = useState(true); // for loading animation
console.log('loading',loading);
useEffect(()=>{
  setTimeout(() => {
    setLoading(false);
  }, 2000);
 
},[])
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Hero />

          <Specialdishes />
          <Favouritedishes
        
          
          />
        </>
      )}
    </div>
  );
};
export default Menu;
