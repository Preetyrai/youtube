import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../util/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import Livechat from "./Livechat";

const Watchpage = () => {
  const [searchParam] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className=" flex">
      <div className="mr-2">
        <iframe
          width="1000"
          height="450"
          src={"https://www.youtube.com/embed/" + searchParam.get("v")}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-full ml-3">
        <Livechat/>
      </div>
     
    </div>
     <CommentsContainer />
  </div>

  );
};

export default Watchpage;
