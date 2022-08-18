import React from 'react'
import Foodcart from './Foodcart'
import pic1 from "../Assets/2.webp"
import pic2 from "../Assets/3.webp"
import pic3 from "../Assets/4.jfif"
import pic4 from "../Assets/5.webp"
import pic5 from "../Assets/6.jfif"

const array = [{a:'VEGGIE TACOS',image:pic1},{a:'FELAFEl',image:pic2},
{a:'SALAD',image:pic3},{a:'VEGTABLES',image:pic4},{a:'PASTA',image:pic5},{a:'BURGER',image:pic2}]
const Parent = () => {
  return (
    <div style={{display:'flex',flexWrap:'wrap'}}>
        
       { array.map( (props,index) => 
            
            <Foodcart name={props.a} key = {index} images={props.image}/>
        )

    }
    </div>
  )
}

export default Parent