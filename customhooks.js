import React,{useEffect,useState} from "react";

function useFetchData (url){
    const [data, setdata] = useState([]);
    
  
    useEffect( () =>{
  
      fetch(url)
        .then((response) => response.json())
        .then(data => {
  
          setdata(data)
        })
  
  
    },[url])

    
    return [data]
}

export default useFetchData
