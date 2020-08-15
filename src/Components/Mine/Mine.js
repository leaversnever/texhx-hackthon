import React from "react";
import SimpleDialogs from "./SimpleDialogs";
import SearchAppBar from "../Storage/SearchAppBar";

export default function Mine () {
    return (
        <div>
            <SearchAppBar />
                <div className="MineContent">
                    <div className="PersonalInfo">
                        <div align="center">
                            <img className="image" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596708768046&di=5f2aea38841c5fdd94db70f8eb518c67&imgtype=0&src=http%3A%2F%2Fimg.qqzhi.com%2Fuploads%2F2018-11-30%2F192208332.jpg" alt="alt" />
                            <SimpleDialogs />
                        </div>
                    </div>
                    <div className="PersonalExpe">
                        <div className="MineBox"><br/>Rank</div>
                        <div className="MineBox"><br/>Achievement</div>
                        <div className="MineBox"><br/>Recommendation</div>
                    </div>
                </div>
        </div>
        
    )
}