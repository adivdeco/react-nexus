
import arr from "../../helper/logic";
import { useState } from "react";


console.log(arr);


function Filter(){

   const [ data, setdata]  = useState(arr);

  function priceSort() {
    const shortdata = [...data].sort((a,b) => a.price-b.price);
    console.log(shortdata);
    setdata(shortdata)
  }

    return (
        <div className="filter">
            <button onClick={priceSort}>
              hight to low
            </button>
        </div>
        
)}



export default Filter;