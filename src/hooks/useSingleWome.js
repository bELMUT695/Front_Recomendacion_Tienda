import React ,{useState, useEffect} from 'react';
import axios from 'axios';
const API='https://back-tienda-electronica.herokuapp.com/api/clothe/';

const useSingleWomen=(id)=>{
   const [itemWomem,setItemWomen]=useState({});
   const [isLoading, setIsLoading] = useState(true)
   
  
   useEffect(async () => {
   
    const response = await axios(`https://back-tienda-electronica.herokuapp.com/api/clothe/${id}` )
    
    setItemWomen(response.data.data);
    console.log(response.data.data)
    setIsLoading(false)
      
   }, [])
  

   return {isLoading,itemWomem};


}

export default useSingleWomen;