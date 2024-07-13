import { useEffect, useState } from "react";

import "./App.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState()
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }
  useEffect(() => {
    async function fetchApiData() {
      const NASA_KEY = 'd5zeULUcunfYVxdeIRg8Clq5Yhcly8Yltfvw7OJ7'
      const url = "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;
        try {
          const res = await fetch(url)
   const  apiData = await res.json()
   setData(apiData)
        }
        catch(err){
          console.log(err.message)
        }
          }
          fetchApiData()
  }, []);
  return (
    <>
     { data ? (<Main  data={data}/>):<div className="loadingState"><i className="fa-solid fa-gear"></i></div>}
  
      {showModal && <Sidebar data={data} handleToggleModal={handleToggleModal}></Sidebar>}
      <Footer data={data} handleToggleModal={handleToggleModal} />
    </>
  );
}

export default App;
