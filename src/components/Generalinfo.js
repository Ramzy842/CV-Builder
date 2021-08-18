import React, { useState } from "react";




const imageHandler = () => {
  let overlay = document.querySelector(".general span");
  overlay.style.display = "flex";
  
};

const removeEdit = () => {
  let overlay = document.querySelector(".general span");
  overlay.style.display = "none";

};

const clickHandler = () => {
  let inputBar = document.querySelector(".url");
  if(inputBar.style.display === "none" ) {
    inputBar.style.display = "block";
  } else {
    inputBar.style.display = "none";
  }
  
};

const Generalinfo = () => {
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  );
  const [name, setName] = useState("Your Name");
  const [email, setEmail] = useState("Example@gmail.com");
  const [phone, setPhone] = useState("Your Number");

  const [visibility, setVisibility] = useState("flex");

  const handler = () => {
    let editable = document.querySelector(".editable");
    if (visibility === "none") {
      setVisibility("flex");
      editable.style.display = `${visibility}`;
    } else {
      setVisibility("none");
      editable.style.display = `${visibility}`;
    }
  };

  return (
    <div className="general">
      <img src={image} onMouseEnter={imageHandler} alt="" className="image" />
      <span onClick={clickHandler} onMouseLeave={() => removeEdit()}>
        Edit
      </span>
      <input
        type="text"
        className="url"
        placeholder="Enter Image url and click Enter"
        onKeyUp={(e) => {
          if (e.keyCode === 13) {
            let inputBar = document.querySelector(".url");
            setImage(`${inputBar.value}`);
            inputBar.value = "";
            inputBar.style.display = "none";
          }
        }}
      />
      <div
        className="generalInfo"
        onMouseOver={() =>
          (document.querySelector(".generalInfo p").style.display = "block")
        }
        onMouseLeave={() =>
          (document.querySelector(".generalInfo p").style.display = "none")
        }
      >
        <p onClick={handler}>Edit</p>

        <form action="" className="editable" autoComplete="off">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            autoComplete="off"
            className="name"
            onChange={() => setName(document.querySelector(".name").value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            className="email"
            onChange={() => setEmail(document.querySelector(".email").value)}
          />
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            className="phone"
            onChange={() => setPhone(document.querySelector(".phone").value)}
          />
        </form>

        <h4>Name: {name}</h4>
        <h4>Email: {email} </h4>
        <h4>Phone: {phone} </h4>
      </div>
    </div>
  );
};

export default Generalinfo;
