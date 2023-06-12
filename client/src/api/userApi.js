import axios from "axios";
import { getCookie } from "../components/helpers/cookies";


export const listOfUser = async()=>{

    const token = getCookie('token');
    const config ={
        headers:{
            "Content-Type":"application/json",
            "Authorization":token
        }
    }
   const data = await axios.get('http://localhost:4000/api/list',config)
   return data
}

export const AnnonceList = async()=>{

    
    const config ={
        headers:{
            "Content-Type":"application/json"
           
        }
    }
   const data = await axios.get('http://localhost:4000/api/annonces',config)
   return data
}