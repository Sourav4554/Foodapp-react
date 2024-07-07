import React from 'react'
import './Popup.css'

const Popup = ({closePopup,popupitem,allmenu}) => {
    
  //Filtering the clicked menu details 
    const PopUpDetails=allmenu.filter((menuitem)=>{
      return (popupitem == menuitem.strMeal) }).map((item)=>{
                 return(
                    <>
                    <div className='image-in-popup'>
                    <img src={item.strMealThumb} alt="" />
                     <h1>{item.strMeal}</h1>
                     </div>
                     <div className='contentdiv-for-popup'>
                     <p>{item.strInstructions}</p>
                     <div className='for-button'>
                      <button>Favourite</button>
            </div>
                    </div>
                   </>
                 )
                })
  
  return (
    <div className='popup'>

        <div className='popup-contents'>
          <img onClick={closePopup} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ0L8L8njUWshrMz0DlBEEn1-CoRmguVDJjQ&s" alt="" className='icon'/>
           {PopUpDetails}
           
        </div>
    </div>
  )
}

export default Popup