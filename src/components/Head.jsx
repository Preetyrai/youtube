import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../util/appSlice";
import { YOUTUBE_SEARCH_API } from "../util/contants";
import { storeCache } from "../util/cacheSlice";
const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const [search, setSearch] = useState();
  const [selectedquery, setSelectedQuery] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [cacheSuggestions, setChowSuggestions] = useState([]);

  const storeCacheData = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (storeCacheData[selectedquery]) {
        getSearch();
        setSelectedQuery(storeCacheData[selectedquery]);
      } else {
        getSearch();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const getSearch = async () => {
    
    const response = await fetch(YOUTUBE_SEARCH_API + search, {
      method: 'GET', 
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      }, 
    });
  console.log(response);
    const responseData = await response.json();
    setSelectedQuery(responseData[1]);

    dispatch(
      storeCache({
        [selectedquery]: responseData[1],
      })
    );
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          alt="image"
          className="h-7"
          onClick={() => toggleMenuHandler()}
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
        />
        <img
          alt=""
          className="h-7 ml-4"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
        />
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onBlur={() => setShowSuggestions(false)}
            onFocus={() => setShowSuggestions(true)}
            type="text"
          />
          <button
            className="border border-gray-400 p-2 rounded-r-full"
            type="submit"
          >
            <img
              className="h-7"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_UjpZD5bCqc03Db2CELthIwlmOU-19GedTA&usqp=CAU"
            />
          </button>
          {showSuggestions && (
            <div className="fixed bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg border">
              <ul>
                {selectedquery.map((list) => (
                  <li
                    className="px-5 py-2 shadow-sm hover:bg-gray-100"
                    key={list}
                  >
                    🔍 {list}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="col-span-1">
        <img
          className="h-7"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMLorm5_s9l2JKPgkTzv61U6yVCIFHGULh7A&usqp=CAU"
        />
      </div>
    </div>
  );
};

export default Head;
