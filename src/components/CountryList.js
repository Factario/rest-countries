import React from "react";
import Card from "./Card"

const CountryList = ({countries}) => {
    const cardComponent = countries.map((list, i) =>{
        return <Card key={i}
        name={countries[i].name}
        region={countries[i].name}
        area={countries[i].area}/>
    })
    return(
        <div>
        {cardComponent}
        </div>
    );
}

export default CountryList