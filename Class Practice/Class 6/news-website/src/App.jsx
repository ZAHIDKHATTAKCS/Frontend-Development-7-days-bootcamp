import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import News from "./components/news";
import Contact from "./components/Contact";


function App() {
  const [count, setCount] = useState(0);

  const [news, setNews] = useState([]);

  // we just create this variable for assuming that the site visitor is user for now as we don't have backend so
  const role = "User";


  // now creating async function to fetch api here, asyn is for may be our function take time to fetching data so that it will not wait for that the next code will be run and show content on frontend
  const getNews = async () => {
    // Fetch is used for fetch api online
    const res = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=381cf8b149194c9f96375c0eb200e009"
    );

    // for fetching api we must have to convert it to json file so for that we using .json funtion
    const data = await res.json();

    // here we just retreive the total articles from the api , now as we know we may be use it again in others components so for that we have to store it in the useState variable
    console.log(data.articles);
    setNews(data.articles);
  };

  useEffect(() => {
    return () => {
      getNews();
    };
  }, []);

  return (
    <div>
      {/* using conditional rendering , it is like if an admin visit the site he can delete the news also and visitors can only read it so for that we use conditional rendering */}
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {
        // ternary operators mean if else 
        role=="User"?(
          <h1>Hello User, Welcome to my first React News Website</h1>
          ):(
          <h1>Hello Admin, Welcome to my first React News Website</h1>
        )
      }

      <p>Read Latest News </p>

      {/* here we will used .map function to retreive all the news or data from the api */}

      {/* this div is for applying grid on these */}
      <div className="grid grid-cols-3">
        {news.map((article) => {
          console.log(article);
          return (
            <News
              title={article.title}
              description={article.description}
              cover={article.urlToImage}
              url={article.url}
            />
          );
        })}
      </div>

      {/* reuse component here , and reuse props*/}

      {/* render component day 6 work*/}
      <Contact />
    </div>
  );
}

export default App;
