import "./App.css";
//import HelloBitch from "./componants/HelloBitch";
/*import { useState, useEffect } from "react";
import axios from "axios";*/
import TrackPaws from "./componants/Paw";
function App() {
  /*
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
*/
  return (
    <div className="App bg-body">
      <TrackPaws />
    </div>
  );
}

export default App;
