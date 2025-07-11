import PokeDex from "./PokeDex";
import { useState } from "react";

function App() {

    const [name,setName] = useState();
    const [data,setData] = useState(null);
    const [error,setError] = useState('');
    async function fetchPokemonData(){

        try{
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+name)

            if(!response.ok){
                setError("Invalid Pokemon Name")                
            }

            const result = await response.json()
            setData(result)
        }
        catch(e){
            setError(e)
        }
        
        }
    
    function onNameChanged(event){
        setName(event.target.value.toLowerCase())
    }
    

    return(
        <>

        <h1 className="AppTitle">PokeDex</h1>
        <div className="container">
             <input type="text" onChange={onNameChanged}/>
            <button onClick={() => fetchPokemonData(name)}>Press</button>

        </div>

        <div>
          {data && <PokeDex PokemonData={data}/>}
        </div>
        
        
    </>
  )
}

export default App
