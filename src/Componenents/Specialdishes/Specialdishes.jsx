import React, { useContext, useState } from 'react';
import './Specialdishes.css';
import Card from '../Card/Card';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"
import Popup from '../Popup/Popup';
import { Allmenu } from '../Context/Context';

const Specialdishes = () => {
  const [viewDish, setViewDish] = useState(false); //display and close the popup
  const [popupitem, setPopUpItem] = useState(''); //Take a item name from clicked item
  const menus=useContext(Allmenu);
  //displaying  popup
  function showpopup(itemName) {
    setViewDish(true);
    setPopUpItem(itemName);
  }

//close popup
  function closePopup() {
    setViewDish(false);
  }

  // Display first 8 dishes in window
  let numberOfSpecialDishes = 8;
  let dishes = menus.slice(0, numberOfSpecialDishes).map((item, index) => {
    return (
      <ScrollAnimation animateIn='flipInY'
      animateOut='flipOutY'>
        
        <Card item={item} showpopup={showpopup} key={index}/>
      </ScrollAnimation>
    );
  });

  return (
    <div className='special-dishes'>
      {viewDish && (
        <Popup 
          closePopup={closePopup}
          popupitem={popupitem}
          allmenu={menus}
        />
      )}
      <div className="for-heading">
        <h1 className='heading-for-sp-dishes'>Special Dishes</h1>
      </div>
      <div className="for-main-container">
        {dishes}
      </div>
    </div>
  );
}

export default Specialdishes;
