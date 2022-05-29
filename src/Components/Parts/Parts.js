import React, { useEffect, useState } from "react";
import OrderPage from "../OrderPage/OrderPage";
import PartsCard from "../PartsCard/PartsCard";

const Parts = () => {
    const [parts, setParts] = useState([]);
    const [partsInfo, setPartsInfo] = useState(null);
    useEffect(() => {
        fetch('https://sazzad795.herokuapp.com/allParts')
            .then(res => res.json())
            .then(data => setParts(data));
    })
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 m-10">
          {
              parts.map(part => <PartsCard key={part._id} part={part} setPartsInfo={setPartsInfo}/>)
          }
            </div>
            {partsInfo && <OrderPage partsInfo={partsInfo} setPartsInfo={setPartsInfo}/>}
      </div>
      
      
  );
};

export default Parts;
