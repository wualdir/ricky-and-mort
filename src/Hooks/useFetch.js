import axios from "axios"
import { useState } from "react"


const useFetch = (url) => {
  const [response, setresponse] = useState()
  const [haserror, sethaserror] = useState(false)

  const getApi = () =>{
    axios.get(url)
    .then(res=>
        {
        setresponse(res.data)
        sethaserror(false)
     })
    
    .catch(err=>{
         console.log(err)
         sethaserror(true)
        })
}
  return [response, getApi,haserror]
}

export default useFetch