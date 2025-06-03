import "./App.css";
import Bedroom from "./Bedroom.jsx";
import Livingroom from "./Livingroom.jsx"

//each componint is fundamentally a function
function App(){
  //our js code goes here
  //in the return, we will add the code to render elements on the page

  return(
    <>
      <div>
        <h1> Hello World!</h1>
        <Bedroom />
        <Bedroom />
        <Livingroom wallcolor={"green"}  couch={"2"}/>
        
      </div>
    </>


  );
}


export default App;
