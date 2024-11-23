import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [apiData,setApiData]=useState([]);

  useEffect(() => {
    const url = `https://pixabay.com/api/?key=47225474-b9cb2fb12b832496727daf44a&q=${input}&image_type=photo&pretty=true`;
     const fetchData =async ()=>{
       const response =await fetch(url);
       const actualData = await response.json();
        setApiData(actualData.hits)
     }
     fetchData();

  }, [input]);

  return (
    <Context.Provider value={{ setInput, input ,apiData}}>
      {props.children}
    </Context.Provider>
  );
};
