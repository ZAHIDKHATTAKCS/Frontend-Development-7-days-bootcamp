// accessing by GetElementById and GetElementById method is used for access the element based on its Id

let heading = document.getElementById("heading");

console.log(heading);

// change the content of an element we used innerText property to change it
heading.innerText = "zahid khattak";

// to color the content of an element we should use
heading.style.color = "green";

// accessing by GetElementByClassName and it is used to access an element by its class , by selecting class this will return array as per there can be same class for multiple elements so this will return array

let links = document.getElementsByClassName("links");
console.log(links);

// Get element by tag name
let link = document.getElementsByTagName("p");

console.log(link);

// to add a child element
let root = document.getElementById("root");
console.log(root);

// now we are going to create a child element inside it by JavaScript
let paragraph = document.createElement("p");

// to add content to the element we have to use textContent
paragraph.textContent =
  "This is Paragraph created through JavaScript and inserted through appened.child property";

// now the element is only created but not inserted into the html document so for that we have to use appenedChild this is used to add the child in the parent like here we created the parent element root in upper code so we have to just insert it

root.appendChild(paragraph);

// to change the style of an element you can use .style property
paragraph.style.color = "green";
paragraph.style.backgroundColor = "lightblue";
paragraph.style.padding = "20px";
paragraph.style.fontSize = "24px";

// the above all are called dom manipulation

// Event Listener is the block of code its execute based on an event like click, hover, scrolling etc

let addbtn = document.getElementById("addbtn");

// addEventListener just take two arguments one is event like click, blur, etc and the other is what to perform after when event occur like when someone click on button than this perform this function so add an event as first argument and add functionality as a second argument
addbtn.addEventListener("click", addnumbers);

function addnumbers() {
  // now take inputs from users .. .value is used for track the value and save it in the variable
  let firstnum = document.getElementById("firstnumber").value;
  let secondnum = document.getElementById("secondnumber").value;

  // number is used to change the string to Number note to write the Number in capitalize formate its mandatory/case sensitive
  let res = Number(firstnum) + Number(secondnum);

  // accessing the h1 to show result on frontend
  let ResultHeading = (document.getElementById("result").textContent = res);

  console.log("The Addition of Two Number is  = ", res);
}

// Set interval is the function used to repeatedly run a block of code after specific intervals , it is used when you want to run the block of code repeatedly like if you want to create a project on a clock so you can use it
function Running() {
  console.log("I am running meaning repeating myself after specific intervals");
}

// setInterval(Running, 5000); // 1000 is the milisecods

function Run() {
  console.log("I am run only once after specific time -> setTimeout function");
}
// set timeout function is like the set interval function but its run the block of code after the set time
setTimeout(Run, 1000);

// arrow function

// Async Functions -> we can create async function by provide async keyword to it like
const myfun = async () => {
  // getvaluefromdb function is not defined but assume we have a function and for example it takes 5 seconds to retreive data from database so this will wait til data is retrieved so this is time consuming , so if we provide async function and proivde await also within the function so it will start continue to the next line without wait for 5 seconds like

  await getvaluefromdb(); // here if we don't use await so this function wait for 5 seconds than run the next one
  console.log("Done");
};

// Api -> Application programming interface , here we learn about fetching Api like here we used json api mean dummy api for fetching we just creating arrow function

const getpost = async () => {
  // fetch api -> fetch function is used to fetch the api data like look at the end point here in this case the end point is posts so it will fetch the posts from the api only
  const request = await fetch("https://jsonplaceholder.typicode.com/posts");

  // converting the api to json, for that we have to use json fnt and for converting it may take some time so here we used await function to run the rest of code without waiting for it
  const data = await request.json();

  console.log(data);

  // Array Advance Method, map and filter are the main advance function

  // map function is used to retreive the multiple data in advance way

  data.map((posts, index) => {
    let p = document.createElement("p");
    // p.setAttribute("class","post");
    p.style.color = "green";
    p.style.backgroundColor = "pink";
    p.style.padding = "12px";
    p.style.border = "3px solid red";

    p.textContent = (index + 1 ) + posts.title;

    result.append(p);
  });
};

// now run the function to fetch api , it will return data in the form of array its because we have multiple posts in api , this is we get the data only from api we can also write data in api
getpost();

// Local Storage -> is the storage where users info is stored in his local computer to set to store his info like login , logout we have to localstorage.setItem() which takes two arguments as key value pair and you can see the result in inspect in application than local storage tab
localStorage.setItem("loginInfo", "Zahid");

// to get the value in applicaton tab
console.log(localStorage.getItem("loginInfo"));

// to remove data from the local storage we have to use localstorage.removeItem
localStorage.removeItem("loginInfo");
