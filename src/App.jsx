import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [pokemon, setName] = useState([])
  const [search,setSearch] = useState("")

  useEffect(()=>{
    const url = "https://pokeapi.co/api/v2/pokemon"
    const fetched = fetch(url).then((fetched)=>fetched.json())
    .then((fetched)=>{setName(fetched.results)})
  },[])


  const handleChange=(event)=>{
    const searchField = event.target.value.toLowerCase()
    setSearch(searchField)
  } 

  const filteredPokemon = pokemon.filter((item)=>
  item.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <input className='search-box' type="search" placeholder='Search pokemon' onChange={handleChange} />
      <div className='card-list'>
      {filteredPokemon.map((item,index)=>
      <div className='card-container' key={index}>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${index+1}.png`}  />
        <p>{item.name}</p>
      </div>
      )}
      </div>
    </>
  )
}

export default App
