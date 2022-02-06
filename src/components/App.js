// create your App component here
import React, {useState, useEffect} from "react";

function App() {
    const [dogImage, dogImageSetter] = useState(null)
    
    
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((resp) => resp.json())
        .then((json) => dogImageSetter(json.message))
        //json is an object with 2 keys (message and status) hence the usage of .message

    },[]);
    
    //Initial loading of 'Loading...' text when there are is no dogImage. The Loading... text will be rendered
    //initially but briefly until the useEffect kicks in, updating the state to take on a value of a dog picture
    if (!dogImage) return <p>Loading...</p>

    return (
      <div>
          <img src={dogImage} alt="A Random Dog" />
      </div>
    );
  }
  
  export default App;