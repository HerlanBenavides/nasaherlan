import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import CardPlanet from './components/CardPlanet'

function App() {
  const [user, setUser] = useState()
  
    useEffect(()=>{
      const URL = 'https://epic.gsfc.nasa.gov/api/natural'
      axios.get(URL)
        .then(response => setUser(response))
        .catch(err => console.log(err))
    },[])
  
    
    console.log(user)


  return (
    <div className="App">
      <CardPlanet user={user} />
    </div>
  )
}

export default App
