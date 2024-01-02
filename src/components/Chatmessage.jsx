import React from "react";


const Chatmessage = ({name,message})=> {
    return (
    <div className="flex item-center">
         <img
              className="h-8"
              alt="user"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMLorm5_s9l2JKPgkTzv61U6yVCIFHGULh7A&usqp=CAU"
            />
            <span className="font-bold px-2">{name}</span>
            <span className="font-bold px-2">{message}</span>
    </div>)
}

export default Chatmessage;