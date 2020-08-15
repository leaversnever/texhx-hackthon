import React, { useState, useEffect } from "react";

import FoodInfo from "./FoodInfo";
import { Link } from "@reach/router";
import SearchAppBar from "./SearchAppBar";

function get(url) {
  var request = new XMLHttpRequest();
  request.open("GET", url, false); //false表示同步请求
  request.send(null);
  if (request.status !== 200) {
    throw new Error("..");
  }
  return JSON.parse(request.responseText);
}

export default function Storage() {
  /*
        FOR TEST
     */
  const [storage, setStorage] = useState({});
  useEffect(() => {
    /*fetch("https://apodapi.herokuapp.com/api/?count="+count)
            .then(res=>res.json())
            .then(d => setData(d))
            .catch(console.log);*/

    fetch("http://121.196.45.17:3000")
      .then((res) => res.json())
      .then((d) => setStorage(d))
      .catch(console.log);
  }, []);

  const [fruit, setFruit] = useState("");

  if (!storage["data"]) {
    return <div></div>;
  }

  // console.log(JSON.parse(data));
  console.log(storage["data"]);
  let fruitData = storage["data"].filter(
    (d) => fruit === "" || d.type === fruit
  );
  console.log(fruitData);
  let array = [];
  for (let i = 0; i < storage["data"].length; i++) {
    array.push(storage["data"][i].type);
  }
  console.log(array);
  let fruitType = [];
  for (let i = 0; i < array.length; i++) {
    if (fruitType.indexOf(array[i]) == -1) {
      fruitType.push(array[i]);
    }
  }

  console.log(fruitType);

  return (
    <div>
      <SearchAppBar setFruit={setFruit} />
      <div className="storageContainer">
        <ul className="sideBar">
          {fruitType.map((data, i) => (
            <div key={i} onClick={() => setFruit(data)}>
              <li className="sidaBarContent">
                {data}
              </li>
            </div>
          ))}
        </ul>

        <div className="storageContainerContent">
          <FoodInfo data={fruitData} />
        </div>
      </div>
    </div>
  );
}
