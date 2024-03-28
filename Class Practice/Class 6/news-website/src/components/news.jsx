import React, { useEffect, useState,} from 'react'
import "./news.css"

// creating component and we can reuse it whenever we need, if we want to use props in our component so we have to pass "props" keyword as an argument to our component like given

function News(props) {


  // using useState hook to not reload page again and again when click on like
    const [likes,setlikes]=useState(0);



    // function of increasing likes when someone click on like button
    function increaselikes() {
      setlikes(likes + 1);
    }

    
  // use effect hook
  useEffect(() => {
    console.log('im running');
  }, [likes]) //here is the place where you give condition of code will run when the condition is true
  
    

    
  return (
    <div className='news'> 
        {/* here we used javascript in html so for that you have to use curly braces like props.tile is the exmaple */}
        <h1 className='heading'>{props.title}</h1><br />
        <img className='img' src={props.cover} alt='img'/><br />
        <p>News Descriptions: <br /> {props.description}</p><br />
        {/* <button onClick={increaselikes}> Like {likes}</button>&nbsp;&nbsp;&nbsp; */}
        <a target='_blank' href={props.url} className='btn'>Read More</a>

    </div>

  )
}

export default News