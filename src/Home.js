import React from 'react'
import'./Home.css'
import logo from './logo.png'

//import {  } from "module";
//   //const [productData,setproductData]=useState([]);
//   //async function getData() {
//    // await axios.get("").then((res)
//    // setproductData(res.data.products);
//   //);
    
//   //}
//   //useEffect(()=>{
//     //getData();
//   //},[]);
//   //console.log(productData);
const Home=()=>{ 
return (
    <div>
      <div id='navbar'>
        <div id='nav1'>
            <h1>Hiee</h1>
        </div>
        <div id='nav2'>
          <p>Home</p>
          <p>Account</p>
          <button>Heyy</button>
        </div>
      </div>
    <div id='cards'>
      <div className='card'>
      <img src="image1.webp"/>
      <h1>Shirt</h1>
      <p>Price</p>
      <div id='colors'>
          <div className='colors1'></div>
          <div className='colors2'></div>
          <div className='colors3'></div>
      </div>
      </div>

      <div className='card'>
      <img src="image2.webp"/>
      <h1>Shirt</h1>
      <p>Price </p>
      <div id='colors'>
          <div className='colors1'></div>
          <div className='colors2'></div>
          <div className='colors3'></div>
      </div>
      </div>

      <div className='card'>
      <img src= "image3.webp"/>
      <h1>Shirt</h1>
      <p>Price </p>
      <div id='colors'>
          <div className='colors1'></div>
          <div className='colors2'></div>
          <div className='colors3'></div>
      </div>

      </div>
      <div className='card'>
      <img src=  "image4.webp"/>
      <h1>Shirt</h1>
      <p>Price </p>
      <div id='colors'>
          <div className='colors1'></div>
          <div className='colors2'></div>
          <div className='colors3'></div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Home
