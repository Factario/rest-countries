import React from "react";

const Card = ({name, region, area}) => {
    return(
        <div className="tl ma2 bg-light-green">
            <div>
                <h2>{name}</h2>
                <h4>{`Region: ${region}`}</h4>
                <h4>{`Area size: ${area}`}</h4>
            </div>
        </div>
    );
}

export default Card