import React from "react";
import AccordionSummary from "./ControlledAccordions";

export default function FoodInfo ({data}) {
    let d = data;
    return (
        <div>
            {
                d.map(
                    (data, i) => {
                        return (
                            <AccordionSummary data={data} i={i} key={i}/>
                        )
                    }
                )
            }
        </div>
        
    )
}