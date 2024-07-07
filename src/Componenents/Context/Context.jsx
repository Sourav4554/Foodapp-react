import React, { createContext,useState,useEffect } from 'react';
import axios from "axios";
export const Allmenu=createContext();
export const Context = (props) => {
    const [menu, setMenu] = useState([]); //meals by first letter
    useEffect(() => {

        // Meals by first letter
        const fetchData = async () => {
          const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
          await axios.get(API_URL).then((response) => {
              setMenu(response.data.meals);
            }).catch((error) => {
              console.log(error);
            });
        };
        fetchData();
      }, []);

  return (
    <div>
     <Allmenu.Provider value={menu}>
        {props.children}
     </Allmenu.Provider>
    </div>
  )
}
