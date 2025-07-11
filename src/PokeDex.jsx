
import SpriteContainer from "./SpriteContainer";

function PokeDex(porps){

    const data = porps.PokemonData;
    const name = data.name;
    const cries = [data.cries.latest,data.cries.legacy]

    return(
        <>
        {data && (
            
            <div className="DataContainer">

                <div className="spritesContainer">
                    <SpriteContainer sprite_data={data.sprites}/>
                </div>
                
                <p> <strong>ID : {data.id}  </strong></p>
                <p> <strong>Weight : {data.weight} units </strong> </p>
                <p> <strong>Height: {data.height} units</strong> </p>

                <div className="typeContainer">

                <h5>
                    Types:
                </h5>

                <ul>
                    {data.types.map((t,index) => (<li key={index}>{t.type.name}</li>))}
                </ul>
                   
                </div>

                <h5>
                    Moves List of {name.charAt(0).toUpperCase() + name.slice(1)}
                </h5>
                <div className="MoveList" style={{ maxHeight: "200px", overflowY: "auto", border: "1px solid #ccc", padding: "10px" }}>
                
                <ul>{data.moves.map((m, index) => (<li key={index}>{m.move.name}</li>))}</ul>
                
                </div>

                {/* cries */}
                <div className="CriesContainer"  style={ {display:"flex", flexDirection:"column",gap:"30px"} } >

                    <h5>
                        Cries
                    </h5>

                    <div style={{display:"flex" , flexDirection:"row",gap:"10px"}}>
                        <h5>
                            Legacy
                        </h5>

                        <audio controls>
                            <source src={cries[1]} type="audio"/>
                        </audio>

                        <h5>
                            Latest
                        </h5>

                        <audio controls>
                            <source src={cries[0]} type="audio"/>
                        </audio>

                    </div>


                </div>



            </div>

            
            
            )}
        
        </>
    )
}

export default PokeDex;