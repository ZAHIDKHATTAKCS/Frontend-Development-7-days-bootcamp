import React, { useState } from "react";
import News from "./news";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const printVlaues = () => {
    console.log("Name ", name);
    console.log("Email ", email);
    console.log("Message ", msg);
  };
  return (
    <div className="contact">
      {/* onchange is the event , e is the variable that have multiple data inside like we are going to use e.target.value that will gives us the value that is user entering in the input*/}

      {/* after that we have to assign the e.target value to the state so for that we have to change console.log to our state like here setName*/}
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          console.log(name);
        }}
        type="text"
        placeholder=" Enter your Name"
      />

      <br />
      <br />

      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          console.log(email);
        }}
        type="email"
        placeholder=" Enter your Email"
      />
      <br />
      <br />

      <textarea
        value={msg}
        onChange={(e) => {
          setMsg(e.target.value);
          console.log(msg);
        }}
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Enter your Message"
      ></textarea>
      <br />
      <br />

      {/* if someone click on the below button so run the printvalues function which is going to print all the values */}
      <button onClick={printVlaues} className="btn">
        Send Message
      </button>
    </div>
  );
}

export default Contact;
