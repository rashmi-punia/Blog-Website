

import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [name, setName] = useState("");

  const handleInputChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleInputChangeName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform subscription logic (e.g., send data to a server, update state)
    // For this example, let's just log the email and mark as subscribed
    console.log("Subscribed Name :", name);
    console.log("Subscribed email:", email);
    setSubscribed(true);
  };

  return (
    <footer className="footer bg-[url('https://source.unsplash.com/random/dark')] ">
      <div className="w-2/3 mx-auto py-5 text-center">
        {subscribed ? (
          <p className="font-bold text-green-600 m-3 text-center underline ">Thank you for subscribing!</p>
        ) : (
          <div>
          <form onSubmit={handleSubmit} className="flex flex-col shadow-md rounded-sm bg-black bg-opacity-50 py-4 px-10 md:m-6">
            <label className=" p-1">
              <span className="px-2 font-semibold text-white">Subscribe to our newsletter : </span>
              <input className=" opacity-80 rounded-sm"
                type="email"
                value={email}           // check out onchange
                placeholder=" e-mail address"
                onChange={handleInputChangeEmail}
                required
              />
             </label>

            <label className=" p-1"> 
            <span className="px-2 font-semibold text-white">Enter your name : </span>

            <input  className=" opacity-80 rounded-sm"
                type="text"
                value={name}
                placeholder=" Name"
                onChange={handleInputChangeName}
                required
              />
            </label>
            <button type="submit" className="subscribe-btn mx-auto my-2 px-2 md:px-4 ">Subscribe</button>
            {/* <button type="reset">Reset</button> */}
            
          </form></div>
        )}
      </div>
    </footer>
  );
};

export default Footer;


// method="GET" ,"POST" in form

{/* <input 
type="number,date,password,checkbox,radio,tel,url"
name="age"
id="age" min={1} max={200} step={1} | min ="2019-09-10"|  /> */}

// <select name="" id="" multiple>
//   <option value="">green</option>
//   <option label="Red" value=""></option>
// </select>
// {/* <textarea id="bio" name="bio"></textarea> */}
// <input type="hidden" name="hidden" value="hii"/>
// <input type="file" name="file" id="file"/> + attribute - enctype="multipart/form-data"



