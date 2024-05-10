import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './Hooks/useFetch'
import GetRamdonNumber from './services/GetRamdonNumber'
import LocationInfo from './Components/LocationInfo'
import ResidentCard from './Components/ResidentCard'
function App() {
  
 
  const [locationId, setlocationId] = useState(GetRamdonNumber(126))

  const url=`https://rickandmortyapi.com/api/location/${locationId}`

  const   [location , getlocation,hasError] = useFetch(url)
  
  
useEffect(() => {
  getlocation()
 
}, [locationId])


  const inputId = useRef()

  const handleid = e =>{
  e.preventDefault()
  setlocationId(inputId.current.value.trim())

  }

  return (
   <div>
    
    <div className='containerImg'>
      <img className='containerImg__imgfondo' src="../public/fondoRyM.jpg" alt="" srcset="" />
    </div>

    <div className='containerForm'>
    <form className='containerForm__search' onSubmit={handleid}>
        <input className='containerForm__search-input'  ref={inputId}  type="text" placeholder='buscar por numero de ubicaion'/>
        <button className='containerForm__search-buttonsearch'>search</button>
    </form>
    </div>
   
   {
      hasError
      ?
      <div className='hasError'>❌hey!! you must provide an id 1 to 126 </div>
      :
      <>
    <LocationInfo
    location={location}
   
    />
    <div className='card__container'>
      {
         location?.residents.map(url =>(
         <ResidentCard 
         key={url} 
         url={url}
          />))
        }
      
    </div>
    </>
    }

   </div>
  )
}

export default App
