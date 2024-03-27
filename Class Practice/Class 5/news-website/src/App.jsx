import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import News from "./components/news";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello , Welcome to my first React News Website</h1>
      <p>Read Latest News </p>

      {/* re use component here , and reuse props*/}
      <News title={"This is News 1"} description={"Desciption 1"} cover={"https://images.unsplash.com/photo-1711419396684-f9ac724390f4?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
      <News title={"This is News 2"} description={"Description 2"} cover={"https://images.unsplash.com/photo-1682686581663-179efad3cd2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
      <News title={"This is News 3"} description={"Description 3"} cover={"https://plus.unsplash.com/premium_photo-1710679065503-6ad0dbeafb9b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
    </div>
  );
}

export default App;
