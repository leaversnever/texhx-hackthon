import React, {useState} from 'react';
import storage from '../../Data/storage'
import FoodInfo from "./FoodInfo";
import {Link} from '@reach/router';
import SearchAppBar from './SearchAppBar';

export default function Storage() {
    /*
        FOR TEST
     */
    const [fruit, setFruit] = useState("");
    // console.log(JSON.parse(data));
    console.log(storage["data"]);
    let fruitData = storage["data"].filter((d) => (fruit==="" || d.type === fruit));
    console.log(fruitData);
    let array = [];
    for(let i=0;i<storage["data"].length;i++){
        array.push(storage["data"][i].type);
    }
    console.log(array);
    let fruitType = [];
    for(let i = 0; i < array.length; i++){    
        if(fruitType.indexOf(array[i]) == -1){ 
            fruitType.push(array[i]); 
        } 
    } 

    console.log(fruitType);

    return (
        <div>
            <SearchAppBar setFruit={setFruit} />
                <div className="storageContainer">
                    <ul className="sideBar">
                        {
                            fruitType.map(
                                            (data, i) => (
                                                <div onClick={() => setFruit(data)}>
                                                    <li key={i}  className="sidaBarContent">{data}</li>
                                                </div>
                                                
                                            )
                                        )
                                    }
                                </ul>
                                
                    
                                    <div className="storageContainerContent">
                                        <FoodInfo data={fruitData} />
                                    </div>
                    
                            </div>
        </div>
        
    )
}