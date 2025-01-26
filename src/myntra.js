import React  from "react";
import ReactDOM from "react-dom/client"
import Header from "./component/header";
import Card from "./component/card";
import Footer from "./component/footer";
import arr from "../helper/logic";
import { useState } from "react";




function App(){
  let [ data, setdata]  = useState(arr);

  function priceSort() {
    data.sort((a,b) => a.price-b.price);
    setdata([...data])
   console.log(data);
   
  }

  function filter(){  
    let filterData = arr.filter((value)=> value.price >1499);
    setdata([...filterData]);
  }

  function filter2(){  
    let filterData = arr.filter((value)=> value.price < 1499);
    setdata([...filterData]);
  }
  function removeFilter(){
    setdata([...arr]);
  }

  return(
    <>
  <Header/>
  <div className="filter">
     <p> Filter:</p>
      <button  onClick={priceSort}>hight to low</button>
      <button  onClick={filter}>above:1499</button>
      <button  onClick={filter2}>below:1499</button>
      <button  onClick={removeFilter}>remove filter</button>

  </div>

    {/* card */}
    <div className="container" style={{display:"flex", gap:"20px" , flexWrap:"wrap"}}>
      
        {
          data.map((value,index)=> <Card key={index} cloth={value.cloth} price={value.price} img={value.img} />)    
          // this creates a new array  and place it, its value from arr.. 
        }
       
    </div>

    <Footer/>

    </>
    
  )
}




const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);


