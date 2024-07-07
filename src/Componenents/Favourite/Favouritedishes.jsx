import React, { useState,useEffect,useContext } from "react";
import "./Favouritedishes.css";
import Pagination from "../Pagination/Pagination";
import Card from "../Card/Card";
import Popup from "../Popup/Popup";
import axios from "axios";
import { Allmenu } from '../Context/Context';
const Favouritedishes = (props) => {
  const [favdishes, favState] = useState([]); // used for storing filtered dishes
  const [active, setActive] = useState('Beef'); // used for active state of category button
  const [currentPage,setCurrentPage]=useState(1); //index of current page
  const [itemsPerPage,setItemsPerPage]=useState(4); // index of last page
  const [viewDish,setViewDish]=useState(false); // for display and closing popup
  const [popupitem,setPopUpItem]=useState('');//Take a item name from clicked item for popup
  const [activeColor, setActiveColor] = useState(1);//used for pagination active color
  const [favourite, setFavourite] = useState([]); //meals with categories
  const [singleItem, setSingleitem] = useState([]); //filtered by category
  const menusFrom=useContext(Allmenu);


  useEffect(() => {
    //Meals with categories
    const fetchData1 = async () => {
      const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setFavourite(data.categories);
      } catch (error) {
        console.error(error);
      }
    };

    //filtered by category
    const fetchData2 = async () => {
      const API_URL ="https://www.themealdb.com/api/json/v1/1/filter.php?c=beef";
      try {
        const response = await axios.get(API_URL);
        setSingleitem(response.data.meals);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData1();
    fetchData2();

 
  }, []);

  // display popup
  function showpopup(itemName){
    setViewDish(true);
    setPopUpItem(itemName)
    }

    //close popup
    function closePopup(){
    setViewDish(false)
    }

  let indexOfLastDish=currentPage*itemsPerPage;
  // 1x4=4
  // 2x4=8
  // 3x4=12

  let indexOfFirstDish=indexOfLastDish-itemsPerPage;
  // 4-4=0
  // 8-4=4
  // 12-4=8
  
  //take cards by slicing
  let showTheseDishes=favdishes.slice(indexOfFirstDish,indexOfLastDish);

  //active the first dish
  let numberOfDishes=4;
  const firstactivedish = singleItem.slice(0,numberOfDishes).map((item,index) => {
      return (
        <div className="card" key={item.idMeal}>
          <img src={item.strMealThumb} alt={item.strMeal} />
          <p className="dish-name">{item.strMeal}</p>
        </div>
      );
      
    });
   

// function for filtering items
  function filtering(category) {
    setSingleitem([]);
      setCurrentPage(1);
     setActiveColor(1);
    setActive(category);
    let filtereddishes = menusFrom.filter((item) => {
        return item.strCategory === category;
      }) .map((item) => {
        return (
           <Card item={item}
           showpopup={showpopup}
           />

        );
      });
    favState(filtereddishes);
  }
 
  //taking the all categories button
  let allCategories =favourite.map((item) => {
    return (
      <li className={item.strCategory == active ? "active" : ""} onClick={() => {filtering(item.strCategory);}}>
        {item.strCategory}
      </li>
    );
  });

  return (
    <div className="favouritedishes">
      <div className="for-heading-1">
        <h1>Pick Your Favourite</h1>
      </div>
      <div className="for-filtering">{allCategories}</div>
      <div className="for-main-container-1">
      {viewDish&&<Popup
       closePopup={closePopup}
       popupitem={popupitem}
       allmenu={menusFrom}
      />}
      {favdishes.length > 0 || firstactivedish.length >0?(
            <>
            {firstactivedish}
             {showTheseDishes}
            </>
        
        ) : (
           <div className="dish">
             <h1 className="dish-h1">Sorry, no dishes available</h1>
             <h2 className="dish-h2">Please try other dishes</h2>
           </div>
        )}
      
      </div>
      <Pagination 
      favdishes={favdishes}
      itemsPerPage={itemsPerPage}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      activeColor={activeColor}
      setActiveColor={setActiveColor}
      />
    </div>
  );
};

export default Favouritedishes;
