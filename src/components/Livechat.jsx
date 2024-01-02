import React, { useEffect, useState } from "react";
import Chatmessage from "./Chatmessage";
import { useDispatch, useSelector } from "react-redux";
import { liveChat } from "../util/liveChatSlice";
import { generateName, makeid } from "../util/helper";

const Livechat = () => {
  const dispatch = useDispatch();
  const livemessage = useSelector((store) => store.chat.message);
  const [ LiveChat, setliveChat] = useState("");
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        liveChat({
          name: generateName(),
          message: makeid(10),
        })
      );
    }, [2000]);
    return () => clearTimeout(i);
  }, []);

const getChat = (e) => {
    e.preventDefault()
    console.log(LiveChat);
    dispatch(liveChat({
        name:"Preety Rai",
        message: LiveChat
    }));
    setliveChat("")
}

  return (
    <>
      <div className="w-full h-[450px]  p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {livemessage.map((list, i) => (
            <Chatmessage key={i} name={list.name} message={list.message} />
          ))}
        </div>
      </div>
      <form className="w-full p-2 ml-2 border border-black" onSubmit={(e)=>getChat(e)}>
        <input className="w-[80%]" type="text" value={LiveChat} onChange={(e)=>setliveChat(e.target.value)} />
        <button className="px-2 mx-2 bg-green-100" type="submit">Submit</button>
      </form>
    </>
  );
};

export default Livechat;
