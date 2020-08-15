import React, {useState} from 'react';
import { AiFillStar } from 'react-icons/ai';

export default function Stars( {number} ){
    return (
        <div>
            <AiFillStar color={(number>0?"black":"white")} />
            <AiFillStar color={(number>1?"black":"white")} />
            <AiFillStar color={(number>2?"black":"white")} />
            <AiFillStar color={(number>3?"black":"white")} />
            <AiFillStar color={(number>4?"black":"white")} />
        </div>
    )
}


