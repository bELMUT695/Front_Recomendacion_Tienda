import {useState,useEffect} from 'react';
import axios from 'axios';


const useGetProductWomen=(API)=>{
    const [products,setProducts]=useState([]);


	useEffect(async () => {
		const response =await axios(API);
		setProducts(response.data.data);
		console.log(response.data.data);
		
	}, []);

    return products;

}

export default useGetProductWomen;